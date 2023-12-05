import bcrypt from 'bcrypt';
import { UserInput } from '../protocols/index';
import { userRepository } from '../repositories/user.repository';
import { emailAlreadyExists } from '../errors/emailAlreadyExists.error';

export async function create(userInput: UserInput) {
  const userExists = await userRepository.getByEmail(userInput.email);
  if (userExists) throw emailAlreadyExists();

  const formattedInput = {
    ...userInput,
    password: bcrypt.hashSync(userInput.password, 10),
  };

  return userRepository.create(formattedInput);
}

export async function getAll() {
  return userRepository.getAll();
}

export const userService = {
  create,
  getAll,
};
