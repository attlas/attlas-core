var express = require('express')
const reply = require('./../../utils/reply')();

const router = express.Router()
const notImplRouter = express.Router();
const goalsRouter = express.Router();

notImplRouter.route('/').all(function(req, res, next) {
  next(new Error('not implemented'));
});

// goals
goalsRouter.route('/*')
  // get all goals
  .get(function (req, res) {
    res.json(reply.success(req.params[0]));
  })
  // create new goal
  .post(function (req, res) {
    return res.json(reply.success(req.body));
  })
;

router.use('/contacts', notImplRouter);
router.use('/goals', goalsRouter);
router.use('/flows', notImplRouter);
router.use('/docs', notImplRouter);

module.exports = router;
