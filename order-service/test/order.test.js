const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // same stuff cu app.js exportă `app`!
const expect = chai.expect;

chai.use(chaiHttp);

describe("Order Service", () => {
    it("should add an order", (done) => {
        chai.request(app)
            .post("/orders")
            .send({ productId: 1, userId: 1, quantity: 2 })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property("productId", 1);
                expect(res.body).to.have.property("userId", 1);
                expect(res.body).to.have.property("quantity", 2);
                done();
            });
    });

    it("should list orders", (done) => {
        chai.request(app)
            .get("/orders")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });
});
