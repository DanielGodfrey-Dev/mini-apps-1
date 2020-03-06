const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/client/dist')));

app.listen(port, () => console.log(`gyrosyncopating on port ${port}`));



