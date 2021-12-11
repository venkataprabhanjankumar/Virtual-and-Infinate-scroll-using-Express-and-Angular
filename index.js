const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const router = require('./routes/getproducts')

const app = express()

app.set('trust proxy',1)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    "Access-Control-Allow-Origin" : 'http://127.0.0.1:4200',
    "Access-Control-Allow-Headers" : ["Origin", "Content-Type", "Accept", "X-CSRF-Token", "Authorization","Access-Control-Allow-Origin"],
    "Access-Control-Allow-Credentials" : "true",
    'Access-Control-Allow-Methods':['GET','POST','PUT','DELETE']
}))

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.use('',router)


const server = app.listen(3000, 'localhost', function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server is running on http://%s:%s", host, port);
});