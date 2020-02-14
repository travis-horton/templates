const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname +  "/static"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log(`Server listening on port: ${port}`);
});
