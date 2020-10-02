// turtleModel.js
var mongoose = require('mongoose');
// Setup schema
var turtleSchema = mongoose.Schema({
    species: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
// Export Turtle model
var Turtle = module.exports = mongoose.model('turtle', turtleSchema);
module.exports.get = function (callback, limit) {
    Turtle.find(callback).limit(limit);
}