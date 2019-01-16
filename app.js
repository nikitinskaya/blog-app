const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const staticDir = __dirname + "/dist/";

const app = express();

app
  .use(bodyParser.json())
  .use(express.static(staticDir))
  .use(cors())


  .listen(process.env.PORT || 8085);