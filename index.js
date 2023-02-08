const express = require('express');
const dbConnection = require('./databaseConnect')
const ResponseRoute = require('./routes/response')

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/response', ResponseRoute);

app.use('/', (req, res) => {
    res.send("Hello")
})

dbConnection();
app.listen(PORT, () => {
    console.log(`App is listening at localhost:${PORT}`)
})

