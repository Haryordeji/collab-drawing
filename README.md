# Collaborative Drawing Board

Real-time drawing app where multiple people can draw on the same canvas. Just open the link and draw.

## What it does

- Multiple users draw together in real-time
- No login required
- New people see the current drawing when they join
- Works on phone and desktop
- Basic tools: colors, brush size, clear canvas

## Running it

```bash
npm install
npm start
```

Open `http://localhost:3000` in a few tabs to test it out.

## How it works

- Node.js server with WebSockets
- HTML5 Canvas on the frontend  
- Drawing events get broadcast to everyone
- Recent strokes stored in memory for new users

## Future ideas

- Better drawing tools
- Text and shapes
- Eventually want to add a collaborative code editor
- Goal is to have both system design drawing and coding in one place

Built with Node.js, WebSockets, and vanilla JS. Nothing fancy.