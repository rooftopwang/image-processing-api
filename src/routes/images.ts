import { Router } from "express";
import IRequestParams from "../utils/IRequestParams";
import { ValidateNumberAsString, ValidateFileName } from "../utils/validator";
import { accessImage } from "../utils/processor";
const images = Router();

images.get("/test", (req, res) => {
    res.status(400).send(`testing endpoint ${req.path}`);
});
images.get("/images", async (req, res) => {
    const params = (req.query as unknown) as IRequestParams;
    const { image, width, height } = params;

    try {
        ValidateFileName(image);
        ValidateNumberAsString(width);
        ValidateNumberAsString(height);
        const stream = await accessImage(
            image,
            parseInt(width),
            parseInt(height)
        );
        res.setHeader("content-type", "image/jpg");
        res.end(stream, "binary");
    } catch (err) {
        res.send("404 Not Found. ");
    }
});

export default images;
