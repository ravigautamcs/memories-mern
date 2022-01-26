const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
require('./db/conn');
const User = require("./models/userSchema");

//connection with the mongodb atlas

// const DB = 'mongodb+srv://ravimemories:ravi@cluster0.2p1ll.mongodb.net/memories?retryWrites=true&w=majority'


const port = process.env.PORT || 3000;

//use of middle ware!!
const middleware = (req,res, next)=>{
    console.log(`hello my middleware`);
    next();
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send("this is the main line!!!");
})

app.get('/about', middleware, (req, res)=>{
    console.log(`hello my about!!`)
    res.send(`this hello is from the about section!!`);
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})