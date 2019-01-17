const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const history = require('connect-history-api-fallback');

const staticDir = __dirname + "/dist/";

const app = express();

app
  .use(bodyParser.json())
  .use(cors())
  .get('/api/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      },
      {
        title: "Hello World 2!",
        description: " 2 Hi there! How are you?"
      }]
    )
  })

  .use(history())
  .use(express.static(staticDir))
  .listen(process.env.PORT || 8085);
