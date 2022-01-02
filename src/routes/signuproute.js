const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        "uid":req.query.uid,
        "pwd":req.query.pwd
    };
    console.log(newuser);
    // user.post(newuser);
    const user = new userdata(newuser);
        user.save();
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;