const express = require('express')
const app = express()
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');

let myVariableServer = 'soft coded data'

app.get('/aaron', function (req, res) {
  res.render('index', {'myVariableClient' : myVariableServer} );
})

app.get('/', function (req, res) {
  res.send('Hello World From Express!')
})

app.get('/whatever', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})




// app.listen(3000)

app.listen(port, () => console.log(`Server is running... on ${port}`));