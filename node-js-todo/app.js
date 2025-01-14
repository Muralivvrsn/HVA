
          
const express = require('express');
var todo_controller = require('./controllers/todo_controller');

var app = express();

//setting up template engine
app.set('view engine','ejs');

//static files
app.use(express.static("./public"));

//fire controllers
todo_controller(app);

//listening to port
app.listen(3000);
console.log('listening to port no 3000');

