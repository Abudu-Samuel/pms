import request from "supertest";
import app from "../app";

const data = {
  location: "Test location",
  malePopulation: 20,
  femalePopulation: 10
};

describe("Load home route", () => {
  it("load the home route", done => {
    request(app)
      .get("/api")
      .expect(200, done);
  });
});

describe("Load all locations route", () => {
  it("load the all locations route", done => {
    request(app)
      .get("/api/locations")
      .expect(200, done);
  });
});

describe("Load all locations route", () => {
  it("load the home route", done => {
    request(app)
      .get("/api/location/0hdhd0")
      .expect(500, done);
  });
});
