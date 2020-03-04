//!!!---need to psuedocode only for lack of time in order to implement
//later or revisit in the future---!!!

const express = require('express')
const app =  express()
const port = 3000
const path = require('path');

//define root directory
app.use('/', express.static(path.join(__dirname, '../client')))

//for handling form submissions
app.use(express.json())


app.get('/', (req, res) => res.send('we are online')) // working
app.post('/upload', (req, res) => { //why not working?!?

  console.log('we are listening');
  //need to parse data and format to csv, return and render to DOM

});

app.listen(port, () => console.log(`...I hear you on port ${port}...`))
