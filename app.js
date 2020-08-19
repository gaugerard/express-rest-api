var express = require("express");

//routes
const routes = require("./routes");

var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var express = require("express");
var cors = require("cors");

//Database
const db = require("./env/database");
//Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

//routes
//app.use("/api", routes);

// homepage route
app.get("/", function (req, res) {
  return res.send({
    message: "Welcome to Angular-Rustine CRUD API with Express.js and MySQL",
  });
});

// User routes
app.use("/users", require("./routes/users"));
// Message routes
app.use("/messages", require("./routes/messages"));

// set port
app.listen(3000, function () {
  console.log("Node app is running on port 3000");
});

module.exports = app;

// connect to database
/*dbConn.connect();*/

// add a new book

/*
app.post("/new/message", function (req, res) {
  let id = req.body.id;
  let content = req.body.content;
  let sender = req.body.sender;
  let receiver = req.body.receiver;

  // validation
  if (!content || !sender || !receiver)
    return res
      .status(400)
      .send({ error: true, message: "Please provide book name and author" });

  // insert to db
  db.query(
    "INSERT INTO messages (id, content, sender, receiver) VALUES (?, ?, ?, ?)",
    [id, content, sender, receiver],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Book successfully added",
      });
    }
  );
});

// retrieve all books
app.get("/messages", function (req, res) {
  db.query("SELECT * FROM messages", function (error, results, fields) {
    if (error) throw error;

    // check has data or not
    let message = "";
    if (results === undefined || results.length == 0)
      message = "Books table is empty";
    else message = "Successfully retrived all books";

    console.log("got requested.");

    console.log(results);
    return res.send(results);
  });
});

// retrieve book by id
app.get("/message/:id", function (req, res) {
  let id = req.params.id;

  if (!id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide message id" });
  }

  db.query("SELECT * FROM messages where id=?", id, function (
    error,
    results,
    fields
  ) {
    if (error) throw error;

    // check has data or not
    if (results === undefined || results.length == 0)
      message = "Book not found";
    else message = "Successfully retrived book data";
    console.log(results[0]);
    return res.send(results[0]);
  });
});


*/
