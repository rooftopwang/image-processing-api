import request from "supertest";
import app from "../index";

describe("indexSpec.ts: testing endpoints", () => {
    it("endpoint /test should work. ", async () => {
        const response = await request(app).get("/test");
        expect(response.status).toBe(204);
    });
});
