import { ApplicationError } from '../middlewares/error.middleware';

export function tokenIsInvalid(): ApplicationError {
  return {
    name: 'TokenIsInvalidError',
    message: 'O token possui o formato inválido!',
  };
}
