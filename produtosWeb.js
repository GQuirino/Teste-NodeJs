var http = require('http');

var server = http.createServer(function(request,response){
	if(request.url == "/produtos"){
	response.end("<html><body><h1>Listando os produtos</h1></body></html>");
	} else {
		response.end("<html><body><h1>Home da casa do codigo</h1></body></html>");
	}
});
server.listen(3000);

console.log("servidor rodando");