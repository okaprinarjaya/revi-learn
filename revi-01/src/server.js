const path = require('path');
const fs = require('fs');
const express = require('express');

const ROOT_APP_DIR = path.resolve(__dirname, '../');
const APP_PUBLIC_DIR = ROOT_APP_DIR + '/public';

const app = express();
const port = 8181;

app.use(express.static(APP_PUBLIC_DIR));

app.get('/', (req, res) => {
  fs.readFile(`${APP_PUBLIC_DIR}/index.html`, (error, data) => {
    if (error) {
      throw error;
    }

    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
