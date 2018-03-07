const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(80, '0.0.0.0', function () {
  console.log('server started on port 80');
});
