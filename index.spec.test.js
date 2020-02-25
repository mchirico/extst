const {server} = require('./src/server') // Link to your server file
const supertest = require('supertest')
const request = supertest(server)


describe("GET /test", function() {
  it("gets the test endpoint", async done => {
    const response = await request.get("/test");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hi works...");
    done();
  });
});
