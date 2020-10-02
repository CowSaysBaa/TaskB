// turtleController.js
// Import Turtle model
Turtle = require('./turtleModel');

// Handle index actions
exports.index = function (req, res) {
    Turtle.get(function (err, turtles) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Turtles retrieved successfully",
            data: turtles
        });
    });
};
// Handle create turtle actions
exports.new = function (req, res) {
    var turtle = new Turtle();
    turtle.species = req.body.species;
    turtle.location = req.body.location;
// save the turtle and check for errors
    turtle.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New turtle created!',
            data: turtle
        });
    });
};
// Handle view turtle info
exports.view = function (req, res) {
    Turtle.findById(req.params.turtle_id, function (err, turtle) {
        if (err)
            res.send(err);
        res.json({
            message: 'Turtle details loading..',
            data: turtle
        });
    });
};
// Handle update turtle info
exports.update = function (req, res) {
Turtle.findById(req.params.turtle_id, function (err, turtle) {
        if (err)
            res.send(err);
        turtle.species = req.body.species;
        turtle.location = req.body.location;
// save the turtle and check for errors
        turtle.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'turtle Info updated',
                data: turtle
            });
        });
    });
};
// Handle delete turtle
exports.delete = function (req, res) {
    Turtle.remove({
        _id: req.params.turtle_id
    }, function (err, turtle) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'turtle deleted'
        });
    });
};