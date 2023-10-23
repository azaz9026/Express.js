const express = require('express')
const app = express()


/** Middleware */

app.use( function(req , res , next){
    res.send("Middleware")
    next()
})

/** Configure of Ejs */

app.set('view engine', 'ejs')

/** Routing */

app.get('/' , function(req , res){
    res.render('index')
})


app.listen(3000)