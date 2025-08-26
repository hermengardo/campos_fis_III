const express = require('express');
const app = express();
const PORT = 8888;

app.use(express.static('.'));

app.listen(PORT, function() {
  console.log(`Server is running on localhost:${PORT}`);
});