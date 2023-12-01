import { ApplicationError } from '../middlewares/error.middleware';

export function invalidInputData(): ApplicationError {
  return {
    name: 'InvalidInputDataError',
    message: 'Os dados fornecidos são inválidos',
  };
}
