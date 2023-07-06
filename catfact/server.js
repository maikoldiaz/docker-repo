const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.get('/catfact', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;
    res.json({ fact: catFact });
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
    res.status(500).json({ error: 'Failed to fetch cat fact' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});