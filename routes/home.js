const route = require('express').Router()

route.get('/',(req,res) => {
    res.render('home')
})

exports = module.exports = route