const express = require('express')
const app =  express()
const port = 3000

app.get('/', (req, res) => res.send('we are online'))

app.listen(port, () => console.log(`...I hear you on port ${port}...`))

