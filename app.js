var express = require("express");
var app = express();
app.use(express.logger());
app.use(express.bodyParser());

currentUrl = null;

app.get('/', function(request, response) {
  if (currentUrl == 'http://creep.dskang.com/') {
    response.send("I'm here too!");
  } else {
    response.redirect(currentUrl);
  }
});

app.post('/url', function(request, response) {
  currentUrl = request.body.url;
  console.log("URL: " + currentUrl);
  response.send(200);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
