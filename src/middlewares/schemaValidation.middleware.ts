import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import { invalidInputData } from '../errors/invalidInputData.error';

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) throw invalidInputData();

    next();
  };
}
