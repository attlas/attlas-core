module.exports = function(express, jsv, reply, helpers) {

  this.router = express.Router();
  this.notImplRouter = express.Router();
  this.goalsRouter = express.Router();

  this. notImplRouter.route('/').all(function(req, res, next) {
    next(new Error('not implemented'));
  });

  // goals
  this.goalsRouter.route('/*')
    // get all goals
    .get(function (req, res) {
      res.json(reply.success(req.params[0]));
    })
    // create new goal
    .post(function (req, res) {
      return res.json(reply.success(req.body));
    });

  this.router.use('/contacts', notImplRouter);
  this.router.use('/goals', goalsRouter);
  this.router.use('/flows', notImplRouter);
  this.router.use('/docs', notImplRouter);
  //
  this.getRouter = function() {
    return this.router;
  }
  return this;
}

