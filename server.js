const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

const recentEvents = [];
const MAX_EVENTS = 1000;

wss.on('connection', (ws) => {
  console.log('New client connected');
  
  recentEvents.forEach(event => {
    ws.send(JSON.stringify(event));
  });
  
  ws.on('message', (data) => {
    try {
      const event = JSON.parse(data);
      
      recentEvents.push(event);
      if (recentEvents.length > MAX_EVENTS) {
        recentEvents.shift();
      }
      
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});