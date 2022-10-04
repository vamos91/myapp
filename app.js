const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.json({response: 'ok'})
})

app.listen(port, () => {
    console.log('App listen on port:' + port)
})