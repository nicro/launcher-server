const express = require('express')
const process = require('process')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api/v1/app/all', (req, res) => {
  res.send(JSON.stringify({
      "result": {
          "apps": [
              "game1", "game2", "game3", "game4", "game5"
            ]
        }
    }))
})

app.use('/', express.static('assets'))

var port = process.env.PORT || 3001;

app.listen(port, () => console.log('server started on port %d', port))
