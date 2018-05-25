var express = require('express')
var router = express.Router()
var notImplRouter = express.Router();
var goalsRouter = express.Router();

notImplRouter.route('/').all(function(req, res, next) {
  next(new Error('not implemented'));
});

// goals
goalsRouter.route('/')
  // get list of all active goals
  .get(function (req, res) {
    res.send('get');
  })
  // create new goal
  .post(function (req, res) {
    console.log(req.body);
    res.json(req.body);
  });
goalsRouter.route('/*')
  .get(function (req, res) {
    res.json(req.params[0]);
  });

router.use('/contacts', notImplRouter);
router.use('/goals', goalsRouter);
router.use('/flows', notImplRouter);
router.use('/docs', notImplRouter);

module.exports = router;
