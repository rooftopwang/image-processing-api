import request from "supertest";
import app from "../index";

describe("indexSpec.ts: testing endpoints", () => {
    it("should work by visiting /test . ", async () => {
        const response = await request(app).get("/test");
        expect(response.status).toBe(204);
    });

    it("should not work by visiting /randompath", async () => {
        const response = await request(app).get("/randompath");
        expect(response.status).toBe(400);
    });
});
