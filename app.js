const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const history = require('connect-history-api-fallback');
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const POSTS_COLLECTION = "posts";
const staticDir = __dirname + "/dist/";

const app = express();

app
  .use(bodyParser.json())
  .use(cors());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

app.get("/api/posts", function (req, res) {
  db.collection(POSTS_COLLECTION).find({}).sort({_id:-1}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get posts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/posts", function (req, res) {
  var newPost = req.body;
  newPost.createDate = new Date();

  if (!req.body.text) {
    handleError(res, "Invalid input", "Must provide post text.", 400);
  } else {
    db.collection(POSTS_COLLECTION).insertOne(newPost, function (err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new post.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

app.get("/api/posts/:id", function (req, res) {
  db.collection(POSTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get posts");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/posts/:id", function (req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(POSTS_COLLECTION).updateOne({ _id: new ObjectID(req.params.id) }, updateDoc, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update post");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/posts/:id", function(req, res) {
  db.collection(POSTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete post");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

app
  .use(history())
  .use(express.static(staticDir));
