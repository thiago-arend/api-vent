import { ApplicationError } from '../middlewares/error.middleware';

export function invalidUserOrPassword(): ApplicationError {
  return {
    name: 'InvalidUserOrPasswordError',
    message: 'E-mail e/ou senha inválidos',
  };
}
