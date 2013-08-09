(function() {
  var app, currentUrl, express, port;

  express = require('express');

  app = express();

  app.use(express.logger());

  app.use(express.bodyParser());

  currentUrl = null;

  app.get('/', function(req, res) {
    return res.redirect(currentUrl);
  });

  app.post('/url', function(req, res) {
    currentUrl = req.body.url;
    console.log("URL: " + currentUrl);
    return response.send(200);
  });

  port = process.env.PORT || 5000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
