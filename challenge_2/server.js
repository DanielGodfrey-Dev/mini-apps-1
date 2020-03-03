const express = require('express')
const app =  express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => res.send('we are online'))

app.listen(port, () => console.log(`...I hear you on port ${port}...`))

app.use('/', express.static(path.join(__dirname, '../client')))

