// Create web server
var express = require('express');
var router = express.Router();

// Create route for GET
router.get('/', function (req, res, next) {
  res.end('Will send all the comments to you!');
});

// Create route for POST
router.post('/', function (req, res, next) {
  res.end('Will add the comment: ' + req.body.comment +
    ' with the author: ' + req.body.author);
});

// Create route for DELETE
router.delete('/', function (req, res, next) {
  res.end('Deleting all comments');
});

// Create route for GET with commentId
router.get('/:commentId', function (req, res, next) {
  res.end('Will send details of the comment: ' + req.params.commentId +
    ' to you!');
});

// Create route for PUT with commentId
router.put('/:commentId', function (req, res, next) {
  res.write('Updating the comment: ' + req.params.commentId + '\n');
  res.end('Will update the comment: ' + req.body.comment +
    ' with author: ' + req.body.author);
});

// Create route for DELETE with commentId
router.delete('/:commentId', function (req, res, next) {
  res.end('Deleting comment: ' + req.params.commentId);
});

// Export module
module.exports = router;



