const express = require("express");

const app = express();

const port = 3001;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("알뜰리에 홈페이지888");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
