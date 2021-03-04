const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const appRoute = require('./app/routers/crud.router');
app.use('/', appRoute);

app.listen(8080, () => {
    console.log('Server Berjalan di Port : 8080');
});