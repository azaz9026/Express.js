const express = require('express')
const app = express()


/** Middleware 

app.use( function(req , res , next){
    res.send("Middleware")
    next()
})
*/

/** Configure of Ejs */

app.set('view engine', 'ejs')

/** Configure of Static folder */

app.use(express.static('./public'))

/** Routing */

app.get('/' , function(req , res){
    res.render('index')
})

app.get('/contact' , function(req , res){
    res.render('contact')
})

/** Route Paremeter */

app.get('/profile/:username' , function( req , res ){
    res.send(` Hello from ${req.params.username}`)
})


app.listen(3000)