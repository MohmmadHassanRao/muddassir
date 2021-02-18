


var mongoose = require('mongoose')


let dbURI = 'mongodb+srv://legend:legend123@cluster0.2c3x6.mongodb.net/testdb?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {
    console.log("Mongoose is conected");
});
mongoose.connection.on('disconnected', function () {
    console.log("Mongoose is disconected");
});
mongoose.connection.on('error', function (err) {
    console.log("Mongoose connection error: ", err);
    process.env(1)
});

process.on('SIGINT', function () {
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    createdOn: { type: Date, 'default': Date.now }
});
var userModel = mongoose.model("users", userSchema);

module.exports = {
    userModel: userModel,

}
