import { ApplicationError } from '../middlewares/error.middleware';

export function emailAlreadyExists(): ApplicationError {
  return {
    name: 'EmailAlreadyExistsError',
    message: 'E-mail já existente',
  };
}
