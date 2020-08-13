const User = require("../models/UserModel")
const auth=require('../middlewares/auth')

module.exports=(app)=>{
    app.post('/users', async(req,res)=>{
        const user=new User(req.body);
        try{
            await user.save();
            res.status(201).send(user);
        }catch(error){
            res.status(400).send(error);
        }
    })
    app.post("/users/login",auth,async(req,res)=>{
        // will match login credentials using auth middleware setup with jsonwebtoken
    })
    app.post("/users/logout",auth,async(req,res)=>{

    })
}


// guess need to be modified to admin, not sure did whatevr i could
// implemented send grid that can send emails, has a welcome message
// if any one send me a message, tthat message should be like automated one
