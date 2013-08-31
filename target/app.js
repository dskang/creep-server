(function() {
  var app, currentUrl, express, isActive, mostRecentTime, port;

  express = require('express');

  app = express();

  app.use(express.logger());

  app.use(express.bodyParser());

  currentUrl = null;

  mostRecentTime = null;

  isActive = function() {
    return (mostRecentTime != null) && Date.now() - mostRecentTime < 15 * 60 * 1000;
  };

  app.get('/', function(req, res) {
    if ((currentUrl != null) && isActive()) {
      return res.redirect(currentUrl);
    } else {
      return res.send("dk is currently offline. #sorrynotsorry");
    }
  });

  app.post('/url', function(req, res) {
    currentUrl = req.body.url;
    mostRecentTime = Date.now();
    console.log("URL: " + currentUrl);
    return res.send(200);
  });

  port = process.env.PORT || 5000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
