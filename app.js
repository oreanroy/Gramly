const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const hbs = require('express-hbs');
const { check,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


app.engine('hbs', hbs.express4({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.use('/',express.static(path.join(__dirname,'public')))  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/pages'))

app.use(session({
    secret: 'Shhh',
    resave: false,
    saveUninitialized: false
}))

app.use('/home',require('./routes/home'))

app.get('/',(req,res) => {
    return res.redirect('/home')
})
app.get('/hometest',(req,res) => {
    res.render('hometest')
})
app.get('/login',(req,res) => {
    res.render('login')
})

//the get request handler will be subsequently removed only for devlopment
app.get('/dashboard',(req,res) => {
     res.render('dashboard', {layout: false})
})
app.post('/dashboard', [
    check('emailLogin', "invalid email").isEmail(), 
    check('passwordLogin', "password less than 8 character").isLength({ min: 8 })
], (req, res) => {
    //alert("You have suceesfully entered")
    var errors = validationResult(req);
    console.log(errors)
    if(errors.isEmpty()){
        console.log("congrats you made in");
        //these are picked by the name tag.
        var email = req.body.emailLogin;
        var pass = req.body.passwordLogin.trim();
        email = sanitizeBody(email).trim().escape();

        console.log(email);
        console.log(pass);
        //create and user and then render the dashboard
        return res.render('dashboard', {layout: false})
    }else{
        console.log(errors.array()[0]);
        console.log(errors.array()[0].msg);
        errormsg = errors.array()[0].msg;
        return res.render('login', { error: errormsg})
    }
})

// this is modal submit handler 
app.post('/login', [
    check('emailModal', "invalid mail").isEmail(), 
    check('passModal', "password less than 8").isLength({ min: 8 }),
    check('nameModal', "name must be more than 4 character and text").isString().isLength({ min: 4 }),
    check('numberModal', "enter number atleast 9 character and numeric").isNumeric().isLength({ min: 9 }),
    check('ageModal', "enter correct age").isNumeric(),
    check('weightModal', "enter correct weight").isNumeric(),
    check('heightModal', "enter correct height").isNumeric()
], (req, res) => {
    var errors = validationResult(req);
    if(errors.isEmpty()){
        //sanatize and then make a entry to database display succ
        console.log("you have sucessfully created an account now login")
        res.render('success');
    }else{
        //return to login page and show error
        console.log(errors.array());
        var errormsg = errors.array()[0].msg;
        res.render('login', {modalerror: errormsg});
    }
})


app.listen(process.env.PORT || 3000, function(){
	console.log("express running on localhost 3000");
});




