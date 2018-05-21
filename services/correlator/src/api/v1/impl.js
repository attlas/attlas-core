var express = require('express')
var router = express.Router()
var notImplRouter = express.Router();
var goalsRouter = express.Router();

notImplRouter.get('/', function(req, res, next) {
  next(new Error('not implemented'));
});

// middleware that is specific to this router
/*
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
*/
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page');
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
})

goalsRouter.route('/')
  .get(function (req, res) {
    res.send('get');
  })
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
