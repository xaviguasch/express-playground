const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hi there!')
})

app.get('/bye', function(req, res) {
    res.send('Goodybye!')
})

app.get('/dog', function(req, res) {
    console.log('someone made a request to /dog');
    
    res.send('MEOW!!!!!')
})

app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000');
})