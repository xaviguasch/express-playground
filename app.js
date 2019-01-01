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

app.get('/r/:subredditName', function(req, res) {
    const subreddit = req.params.subredditName
    console.log(req.params)
       
    res.send(`Welcome to the ${subreddit.toUpperCase()} subreddit, frendo!!!`)
})

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {    
    console.log(req.params);

    res.send('Welcome to a subreddit post!')
})

app.get('*', function(req, res) {    
    res.send('You are a star!!!')
})


app.listen(3000, 'localhost', function() {
    console.log('server has started, listening on port 3000');
})