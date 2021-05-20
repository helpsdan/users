const express = require('express')
const serverless = require('serverless-http');
const router = require("./src/routes/router")

const app = express()

app.use(express.json());

app.use("/", router);

app.get('/', (req, res) => {
    res.send('Users App')
})

app.listen(3000, () => {
    console.log('Users App running...')
})

module.exports = { app }

module.exports.handler = serverless(app);