var express = require('express'),
  router = express.Router(),
  mongojs = require('mongojs');
var db = mongojs('mongodb://marie:marie@ds161059.mlab.com:61059/romagny13_blog', ['posts']);
// create a free db on mLab https://mlab.com/home
// var db = mongojs('<mongo-mlab-db>', ['posts']);

// get http://localhost:3000/api/v1/posts
router.get('/posts', function (req, res, next) {
    db.posts.find(function (err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts);
        }
    });
});

// get one
router.get('/posts/:id', function (req, res, next) {
    db.posts.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, post) {
        if (err) {
            res.send(err);
        } else {
            res.json(post);
        }
    });
});

// add
router.post('/posts', function (req, res, next) {
    var post = req.body;
    if (post.title === '' || post.content === '') {
        res.status(400);
        res.json({
            "error": "Invalid data"
        });
    } else {
        db.posts.save(post, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

// update
router.put('/posts/:id', function (req, res, next) {
    var post = req.body;
    db.posts.update({
        _id: mongojs.ObjectId(req.params.id)
    }, post, {}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

// delete
router.delete('/posts/:id', function (req, res, next) {
    db.posts.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
