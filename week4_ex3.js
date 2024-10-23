var express=require("express")
var fs= require("fs")
var app=express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send("hello it is my first express application")
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})

app.get('/about',function(req,res)
{ 
    res.send("This is basic express application ")
})

app.get('/users/:userId/books/:bookId', function (req, res) {
        res.send(req.params)
})

app.get('/GetStudents',function (req,res)
{ 
    studentdata={}
 fs.readFile(__dirname + "/" + "Student.json", 'utf8',
 function (err, data) { console.log( data );

 res.json({ 'status':true, 'Status_Code':200,
 'requested at': req.localtime, 'requrl':req.url,
 'request Method':req.method, 'studentdata':JSON.parse(
data)});
});
})