import { ApplicationError } from '../middlewares/error.middleware';

export function tokenHasExpired(): ApplicationError {
  return {
    name: 'TokenHasExpiredError',
    message: 'O token expirou!',
  };
}
