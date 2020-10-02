// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const MONGODB_URI  = 'mongodb+srv://user:1234@cluster0.rkuir.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connect to Mongoose and set connection variable
mongoose.connect(MONGODB_URI || 'mongodb://localhost/taskb', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

mongoose.connection.on('connected', () => {console.log("Mongoose is connected.");});

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hi, this is TaskB'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running TaskB on port " + port);
});

module.exports = app; // for testing