var express = require('express')
var app = express()


 app.use(express.static(__dirname + '/public')); //This line calls the static webpage index.html which is present in public folder

app.get('/', function(req,res){
    res.sendFile(__dirname , '/public')
});

var factorial=function(num1){    // factroial function is created
    let fact=1;
    for(let i=1; i<=num1; i++)
    {
        fact=fact*i;
    }
    return fact;
}

app.get('/factorial',function(req,res){    
    var number = req.query.number;
    var result = factorial(number);
    res.send("The factorial of number "+number+" is "+result);
    console.log("The factorial of number "+number+" is "+result);
})

app.get('/test',function(req,res){
    var username = req.query.username;
    console.log('I am activated!!!!'+username);
    res.send("Hello I am activated"+username);
})

var port= 3000
app.listen(port)
console.log("Server listening on:",port)

