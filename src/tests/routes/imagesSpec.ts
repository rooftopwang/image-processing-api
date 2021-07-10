import request from "supertest";
import images from "../../routes/images";
import express from "express";

const app = express();
app.use("/app", images);

describe("images.ts: testing endpoints", () => {
    it("endpoint /app/test should work. ", async () => {
        const response = await request(app).get("/app/test");
        expect(response.status).toBe(400);
    });

    it("should not work by visiting /randompath", async () => {
        const response = await request(app).get("/app/randompath");
        expect(response.status).toBe(400);
    });
});
