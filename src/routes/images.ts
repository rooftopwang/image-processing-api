import { Router } from "express";
const images = Router();

images.get("/test", (req, res) => {
    res.status(400).send(`testing endpoint ${req.path}`);
});
images.get("/images", (req, res) => {});

export default images;
