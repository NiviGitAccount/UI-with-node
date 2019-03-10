const express = require('express');
const exphbs = require('express-handlebars');//view engine
const app = express();
const path=require("path");

// Routes
app.use('/', require('./routes/user.js'));

const PORT = process.env.PORT || 5000;


//View engine configuration
app.set("views",path.join(__dirname,"views"));//setting view path
app.engine("handlebars",exphbs());//setting view engine
app.set("view engine","handlebars");

app.listen(PORT, console.log(`Server started on port ${PORT}`));