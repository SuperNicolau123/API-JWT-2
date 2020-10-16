//index.js
var http = require('http'); 
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.get('/carros', (req, res, next) => { 
    var url = `http://localhost:3000/carros/${id}`;
    const resultado = fetch(url)
    res.json(resultado)
}) 
 
var server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")
