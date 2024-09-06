var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Middleware to enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);  
        res.end(data);
    });
});

// Endpoint to Add a new user
app.post('/addUser', function(req, res) {
    const newUser = req.body;
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        if (err) {
            console.error('Error reading users.json:', err);
            res.status(500).send('Error reading users.json');
            return;
        }

        let users = JSON.parse(data);
        const newUserrollno = 'user' + (Object.keys(users[0]).length + 1);
        users[0][newUserrollno] = newUser;

        fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(users), 'utf8', function(err) {
            if (err) {
                console.error('Error writing users.json:', err);
                res.status(500).send('Error writing users.json');
                return;
            }
            console.log('User added successfully:', newUser);
            res.status(200).send('User added successfully');
        });
    });
});

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
});
