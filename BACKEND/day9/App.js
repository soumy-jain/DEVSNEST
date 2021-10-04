const express = require("express");
const path = require("path");

const app = express();

app.get("/getdoc/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/files/" + req.params.id));
});

app.get("/pages/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/" + req.params.id + ".html"));
});

app.listen(3000, () => {
  console.log("Server open on 3000");
});
