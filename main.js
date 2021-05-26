const express = require('express')
var app = express()

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
app.listen(3001, () => console.log('server started'))
