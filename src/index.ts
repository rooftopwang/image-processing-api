import express, { Request, Response } from "express";
import images from "./routes/images";
import logger from "./middleware/logger";

const app = express();
const PORT = 3000;
const middleware = [
    logger,
    express.json(),
    express.urlencoded({ extended: false })
];

// middleware
app.use(middleware);

// routing
app.get("/test", (req: Request, res: Response): void => {
    res.status(204).send("in test endpoint. ");
});
app.use("/app", images);

app.get("*", (req: Request, res: Response): void => {
    res.status(400).send("400 Bad Request. ");
});

app.listen(PORT, (): void => {
    console.log(`app listening at http://localhost:${PORT}`);
});
export default app;
