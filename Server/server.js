var express = require('express');
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express()
// var server = http.createServer(app);


// var { userModel } = require("./dbrepo/index.js")
var { userModel } = require('./dbrepo/index')
var authRoutes = require("./auth/auth")

console.log("userModel ====", userModel);


var app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use(cookieParser())
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use("/auth", authRoutes)


app.use(function (req, res, next) {
    console.log("cookies: ");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})
