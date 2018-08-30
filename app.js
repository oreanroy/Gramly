const express = require('express');
const app = express();
var path = require('path');

//view at port 3000

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});
//custom 404 page
app.use(function(req, res, next){
	res.status(404);
	res.sendFile(path.join(__dirname + '/views/404.html'));
});
//custom 500 page
app.use(function(req, res, next){
	res.status(500);
	res.sendFile(path.join(__dirname + '/views/500.html'));
});


app.listen(3000, function(){
	console.log("express running on localhost 3000");
});




