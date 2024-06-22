const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // ne asigurăm că app.js exportă `app`
const expect = chai.expect;

chai.use(chaiHttp);

describe("User Service", () => {
    it("should add a user", (done) => {
        chai.request(app)
            .post("/users")
            .send({ name: "John" })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property("name", "John");
                done();
            });
    });

    it("should list users", (done) => {
        chai.request(app)
            .get("/users")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });
});
