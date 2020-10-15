// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Received get request for TaskB',
    });
});
// Import turtleController
var turtleController = require('./turtleController');
// Turtle routes
router.route('/turtles')
    .get(turtleController.index)
    .post(turtleController.new);
router.route('/turtles/:turtle_id')
    .get(turtleController.view)
    .patch(turtleController.update)
    .put(turtleController.update)
    .delete(turtleController.delete);
// Export API routes
module.exports = router;