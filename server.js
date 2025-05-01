const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let headshotStatus = false; // false means off, true means on

// Endpoint to get current headshot status
app.get('/headshot-status', (req, res) => {
  res.json({ headshot: headshotStatus });
});

// Endpoint to set headshot status
app.post('/headshot-status', (req, res) => {
  const { headshot } = req.body;
  if (typeof headshot === 'boolean') {
    headshotStatus = headshot;
    res.json({ success: true, headshot: headshotStatus });
  } else {
    res.status(400).json({ success: false, message: 'Invalid headshot value' });
  }
});

app.listen(port, () => {
  console.log(`Headshot API server listening at http://localhost:${port}`);
});
