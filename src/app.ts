import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import cors from 'cors';
import userRouter from './routes/user.router';
import handleApplicationErrors from './middlewares/error.middleware';

const app = express();

app.use(json()); // body-parser
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});
app.use(userRouter);

app.use(handleApplicationErrors);

export default app;
