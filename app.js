var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use("/assets", express.static(__dirname + "/public"));
app.use('/', (req, res, next) => {
    console.log('Request URL:'+ req.url);
    next();
})
app.get("/", (req, res) => {
  res.send(`<html><head><link rel="stylesheet" href="/assets/style.css"></head><body><h1>Hola mundito</h1></body></html>`);
});
app.get("/api", (req, res) => {
  res.json({ firstname: "Luis", lastname: "Garcia" });
});
app.get("/person/:id", (req, res) => {
  res.send(
    "<html><head></head><body><h1>Person: " +
      req.params.id +
      "</h1></body></html>"
  );
});
app.listen(port);


