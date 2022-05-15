const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const messagesRouter = require('./router/messagesRouter');


const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/messages", messagesRouter);


app.listen(port, () => {
    console.log(`Cloud computing app listening on ${port}!`)
});