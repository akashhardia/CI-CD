const express = require('express');
const app = express();

PORT = 3000

app.get('/', (req, res) => {
  res.send('hello');
})

app.listen(PORT, (err) => {
  console.log(`Server has started!! ${PORT}`);
})
