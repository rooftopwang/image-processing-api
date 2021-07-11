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
        const file = ValidateFileName(image);
        ValidateNumberAsString(width);
        ValidateNumberAsString(height);
        const stream = await accessImage(
            file,
            parseInt(width),
            parseInt(height)
        );
        res.setHeader("content-type", "image/jpg");
        res.end(stream, "binary");
    } catch (err) {
        res.status(404).send(
            "404 Not Found. Please check your file name and sizes. "
        );
    }
});

images.get("*", (req, res) => {
    res.status(400).send("400 Not a Valid Request. ");
});

export default images;
