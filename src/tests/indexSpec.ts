import request from "supertest";
import app from "../index";

describe("indexSpec.ts: testing endpoints", () => {
    it("endpoint /test should work. ", async done => {
        const response = await request(app).get("/test");
        expect(response.status).toBe(200);
        done()
    });
});
