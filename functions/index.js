const functions = require('firebase-functions');

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://user:1234@cluster0.rkuir.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connect to Mongoose and set connection variable
mongoose.connect(MONGODB_URI || 'mongodb://localhost/taskb', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

mongoose.connection.on('connected', () => { console.log("Mongoose is connected."); });

// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = 3000; // for some reason, adding process.env.PORT || will crash firebase functions

// Send message for default URL
app.get('/', (req, res) => res.send('Hi, this is TaskB from Firebase functions'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, () => {
    console.log("Running TaskB on port " + port);
});

//module.exports = app; // for testing, also this will prevent the exporting of the app for whatever reason

exports.app = functions.https.onRequest(app);
