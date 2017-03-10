var express = require('express')
var app = express()

// serves static files in build folder
app.use(express.static('../client/build'))


// sends some data..
app.get('/api/subs', function (req, res) {
  res.json({ some: 'data' })
})

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})