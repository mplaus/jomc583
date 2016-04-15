var express = require ('express');

var app = express();

var data = {
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

//Creates a rout for when the user request the home page or root of the website. This is represtent by the "/"
app.get('/', function(req, res) {
   //this is a get request so you do not want to manipulte the req parameter
   res.render('index', data);
    
});

app.get('/hello', function(req, res) {
   //this is a get request so you do not want to manipulte the req parameter
   res.send("Hello");
    
});

app.listen(8080, function() {
    console.log('App is listening on port 8080');
    
});