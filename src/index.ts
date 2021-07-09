import express from "express";

const app = express();
const PORT = 3000;

const logger = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    console.log(`inside the logger function. `);
    console.log(`current path is: ${req.path}`);
    next();
};

app.use(logger);

app.get("/test", (req, res) => {
    res.send("200, OK. ");
});

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
export default app;
