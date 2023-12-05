import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt, { DecodeOptions, VerifyErrors } from 'jsonwebtoken';
import { tokenIsInvalid } from '../errors/tokenIsInvalid.error';
import { tokenHasExpired } from '../errors/tokenHasExpired.error';

dotenv.config();

export function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) throw tokenIsInvalid();

  const parts = authorization.split(' ');
  if (parts.length !== 2) throw tokenIsInvalid();

  const [schema, token] = parts;
  if (schema !== 'Bearer') throw tokenIsInvalid();

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (
      error: VerifyErrors,
      decoded: DecodeOptions, // eslint-disable-line @typescript-eslint/no-unused-vars
    ) => {
      if (error) {
        if (error.name === 'TokenExpiredError') throw tokenHasExpired();
        if (error.name === 'JsonWebTokenError') throw tokenIsInvalid();
      }
    },
  );

  next();
}
