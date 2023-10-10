// Create web server
var express = require('express');
var router = express.Router();
var db = require('../database');

// Get all comments
router.get('/all', function(req, res, next) {
    db.query('SELECT * FROM comments', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Get comment by id
router.get('/get/:id', function(req, res, next) {
    var id = req.params.id;
    db.query('SELECT * FROM comments WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Add a new comment
router.post('/add', function(req, res, next) {
    var comment = req.body.comment;
    var user_id = req.body.user_id;
    var post_id = req.body.post_id;
    var date = req.body.date;
    db.query('INSERT INTO comments (comment, user_id, post_id, date) VALUES(?,?,?,?)', [comment, user_id, post_id, date], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Update an comment
router.put('/update', function(req, res, next) {
    var id = req.body.id;
    var comment = req.body.comment;
    var user_id = req.body.user_id;
    var post_id = req.body.post_id;
    var date = req.body.date;
    db.query('UPDATE comments SET comment=?, user_id=?, post_id=?, date=? WHERE id=?', [comment, user_id, post_id, date, id], function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Delete an comment
router.delete('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    db.query('DELETE FROM comments WHERE id=?', id, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;