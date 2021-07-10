import { Router } from "express";
import IRequestParams from "../utils/IRequestParams";
import { ValidateNumberAsString, ValidateFileName } from "../utils/validator";
import { accessImage } from "../utils/processor";
const images = Router();

images.get("/test", (req, res) => {
    res.status(400).send(`testing endpoint ${req.path}`);
});
images.get("/images", async (req, res) => {
    // const { image, width, height } = req.params as IRequestParams;

    const params = req.params as IRequestParams;
    const { image, width, height } = params;

    ValidateFileName(image);
    ValidateNumberAsString(width);
    ValidateNumberAsString(height);

    const stream = await accessImage(image, parseInt(width), parseInt(height));
    res.setHeader("content-type", "image/jpg");
    res.send(stream);
});

export default images;
