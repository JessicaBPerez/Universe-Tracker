const express = require('express');
const logger = require('morgan')
const app = express()
    // const routes = require('./routes/index.js')

app.use(express.json());

app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT)
});