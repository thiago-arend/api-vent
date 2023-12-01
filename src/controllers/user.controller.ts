import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { UserInput } from '../protocols/index';
import { userService } from '../services/user.service';

export async function create(req: Request, res: Response) {
  const userInput = req.body as UserInput;
  const response = await userService.create(userInput);

  res.status(httpStatus.CREATED).send(response);
}

export const userController = {
  create,
};
