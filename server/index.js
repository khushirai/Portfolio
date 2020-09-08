const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/UserModel");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true , useCreateIndex:true, useUnifiedTopology:true});

const app = express();

app.use(cors());

app.use(bodyParser.json());

require("./routers/user")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);