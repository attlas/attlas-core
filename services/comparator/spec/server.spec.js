var req = require("request");
const context = require('../src/utils/context')('comparator');
const reply = require('../src/utils/reply')();


describe("Server", () => {
  var server;
  beforeAll(() => {
    server = require("../src/server");
  });
  afterAll(() => {
    server.close();
  });
  describe("GET /", () => {
  var data = {};
    beforeAll((done) => {
      req.get(context.getHTTPEndpoint(), (error, response, body) => {
        console.log(body);
        console.log(typeof body);
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
      expect(data.body).toEqual(reply.buildData([]));
    });
  });
    /*
    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
    */
});