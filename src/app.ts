import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import cors from "cors";

const app = express();

app.use(json()); // body-parser
app.use(cors())

app.get('/health', (req: Request, res: Response) => {
    return res.status(httpStatus.OK).send("I'm ok!");
});
//app.use(errorHandlerMiddleware);

export default app;