(function() {
  var app, currentUrl, express, port;

  express = require('express');

  app = express();

  app.use(express.logger());

  app.use(express.bodyParser());

  currentUrl = null;

  app.get('/', function(req, res) {
    if (currentUrl != null) {
      return res.redirect(currentUrl);
    } else {
      return res.send("Looks like DK hasn't been online in a while...");
    }
  });

  app.post('/url', function(req, res) {
    currentUrl = req.body.url;
    console.log("URL: " + currentUrl);
    return res.send(200);
  });

  port = process.env.PORT || 5000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
