const path = require('path');

const goal = require('./models/goal.js');

// controllers
const contacts = require('./ctrls/contacts.js');
const goals = require('./ctrls/goals.js');
const flows = require('./ctrls/flows.js');
const docs = require('./ctrls/docs.js');


module.exports = function(express, jsv, reply, helpers) {

  this.router = express.Router();
  //this.notImplRouter = express.Router();
  this.goalsRouter = express.Router();
  //
  // compile schemas
  jsv.compile(goal.GoalParamSchemaId, goal.GoalParamSchema);

  /*this.notImplRouter.route('/').all(function(req, res, next) {
    next(new Error('not implemented'));
  });*/
  // Execution context
  this.contacts = new contacts.Contacts();
  this.goals = new goals.Goals();
  this.flows = new flows.Flows();
  this.docs = new docs.Docs();
  //
  this.context = {
    home: __dirname,
    contacts: this.contacts,
    goals: this.goals,
    flows: this.flows,
    docs: this.docs};

  // goals
  this.goalsRouter.route('/*')
    // get all goals
    .get(function (req, res) {
      return res.json(reply.success(req.params[0]));
    })
    // create new goal
    .post(helpers.validateReqBody(jsv, goal.GoalParamSchemaId), function (req, res) {
      console.log(this.context);
      const params = req.body;
      const flow = this.flows.getFlowById(this.context.home, params.flowId);
      if (flow) {
        const goal = this.goals.createGoal(req.body);
        return goal.execute(flow)
          .then(r => {
            console.log(r);
            return r;
          })
          .then(r => {
            return res.json(reply.success(r));
          })
          .catch(e =>{
            return res.json(reply.fail(e));
          });
      }
      return res.json(reply.fail([`flow id: '${params.flowId}' is unknown`]));
    });

  //this.router.use('/contacts', notImplRouter);
  this.router.use('/goals', goalsRouter);
  //this.router.use('/flows', notImplRouter);
  //this.router.use('/docs', notImplRouter);
  //
  this.getRouter = function() {
    return this.router;
  }
  return this;
}

