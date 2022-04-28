const express = require("express");

const app = express();

const port = 3001;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("알뜰리에 홈페이지 하하하");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
