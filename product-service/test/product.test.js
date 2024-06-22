const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // ne asigurăm că app.js exportă `app`
const expect = chai.expect;

chai.use(chaiHttp);

describe("Product Service", () => {
    it("should add a product", (done) => {
        chai.request(app)
            .post("/products")
            .send({ name: "Laptop" })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property("name", "Laptop");
                done();
            });
    });

    it("should list products", (done) => {
        chai.request(app)
            .get("/products")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });
    });
});
