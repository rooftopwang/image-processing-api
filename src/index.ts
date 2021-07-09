import express from "express";
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
app.get("/test", (req, res) => {
    console.log(`test from domain: ${req.hostname}`);
    res.status(204).send("in test endpoint. ");
});
app.use("/app", images);

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
export default app;
