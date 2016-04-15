var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

data = {
    Matt: {
        age: "21",
        food: "Ricearoni"
        },
    Courtney: {
        name: "Courtney",
        food: "stuff"
        }
    };

app.set('view engine', 'ejs');

app.get('/rest', function (req, res) {
  res.send("GET--retrieval/read of information Post--Create Data Put--Update Delete Remove Data")
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});