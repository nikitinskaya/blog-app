const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const history = require('connect-history-api-fallback');
var mongodb = require("mongodb");

const staticDir = __dirname + "/dist/";

const app = express();
const routes = require('./routes/routes.js');

app
    .use(bodyParser.json())
    .use(cors())
    .use('/api', routes);



app.use(history())
    .use(express.static(staticDir))
    .listen(process.env.PORT || 8085);
