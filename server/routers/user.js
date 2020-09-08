const User=require('../models/UserModel')
const auth = require("../middlewares/auth");
const { sendWelcomeEmail } = require("../emails/email");

module.exports = (app) => {
    app.post("/users", async (req, res) => {
        const user = new User(req.body);
        try {
            await user.save();
            sendWelcomeEmail(user.email,user.name)
            const token= await user.generateAuthToken()
            res.status(201).send(user);
        } catch (e) {
            res.status(400).send(e);
            console.log(error)
        }
    });
    app.post("/users/login", async (req, res) => {
        try {
            const user = await User.findByCredentials(
                req.body.email,
                req.body.password
            );
            const token=await user.generateAuthToken()
            res.send({user, token})  
        } catch (e) {
            res.status(400).send();
            console.log(e)
        }
    });
    app.post("/users/logout", auth, async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token;
            });
            await req.user.save();

            res.send();
        } catch (e) {
            res.status(500).send();
        }
    });
    app.get("/users/me", auth, async (req, res) => {
        res.send(req.user);
    });
};
