var express = require('express')
var app = express()
var I = require('instrumental-node');
I.configure({
  // from here: https://instrumentalapp.com/docs/tokens
  apiKey:  process.env.INSTRUMENTAL_API_KEY, // 'project_api_token',

  // optional, default shown
  host:    'collector.instrumentalapp.com',

  // optional, default shown
  enabled: true,
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  I.increment('example.node.hello.worlds' /*, value = 1, time = now, count = 1 */);
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
