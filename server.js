const express = require('express');
const app = express()

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, this is your Universe App!')
})

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT)
});