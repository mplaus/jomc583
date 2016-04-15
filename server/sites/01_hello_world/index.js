var http = require('http');

var me = {
    name: "Matt",
    age: "21"
};

http.createServer( function(request, response) {
    
    response.writeHead(200);
    response.write('Hello world from Matt');
    response.end();
    
    
}).listen(8080, function() {
   console.log('Listening on port 8080...'); 
});