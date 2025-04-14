const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://gopibanjara87:<db_password>@karan.vj7sgzy.mongodb.net/?retryWrites=true&w=majority&appName=karan")

Http2ServerRequest.listen(3000, function(){
    console.log('server is runing');
});