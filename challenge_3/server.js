const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => res.send('we hear you'))

app.listen(port, () => console.log(`we listen. port ${port}`))


