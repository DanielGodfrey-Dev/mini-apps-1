const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('we listen. we acknowledge.'));

app.listen(port, () => console.log(`gyrosyncopating on port ${port}`));



