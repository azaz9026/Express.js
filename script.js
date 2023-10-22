const express = require("express")
const app = express()

/** Middleware */

app.use(function(req , res , next){
    res.send("middleware");
    next();
})

app.get('/' , function( req , res ){
    res.send("Hello World")
})

app.get('/profile' , function( req , res ){
    res.send("Hello my profile")
})

app.listen(3000)