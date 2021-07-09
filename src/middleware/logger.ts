import express from "express";
const logger = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    console.log(`inside the logger function. current path is: ${req.path}`);
    next();
};

export default logger;
