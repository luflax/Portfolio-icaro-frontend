const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()


app.use(express.static('build'));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.use('/', serveStatic(path.join(__dirname, '/build')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)