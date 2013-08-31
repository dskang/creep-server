express = require 'express'
app = express()
app.use express.logger()
app.use express.bodyParser()

currentUrl = null
mostRecentTime = null

isActive = ->
  mostRecentTime? && Date.now() - mostRecentTime < 15 * 60 * 1000

app.get '/', (req, res) ->
  if currentUrl? and isActive()
    res.redirect(currentUrl)
  else
    res.send "dk is currently offline. #sorrynotsorry"

app.post '/url', (req, res) ->
  currentUrl = req.body.url
  mostRecentTime = Date.now()
  console.log "URL: #{currentUrl}"
  res.send 200

port = process.env.PORT || 5000
app.listen port, ->
  console.log "Listening on #{port}"
