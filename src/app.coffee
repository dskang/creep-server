express = require 'express'
app = express()
app.use express.logger()
app.use express.bodyParser()

currentUrl = null

app.get '/', (req, res) ->
  if currentUrl?
    res.redirect(currentUrl)
  else
    res.send "Looks like DK hasn't been online in a while..."

app.post '/url', (req, res) ->
  currentUrl = req.body.url
  console.log "URL: #{currentUrl}"
  res.send 200

port = process.env.PORT || 5000
app.listen port, ->
  console.log "Listening on #{port}"