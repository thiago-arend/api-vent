import prisma from '../config/database';
import { UserInput } from '../protocols/index';

function create(userInput: UserInput) {
  return prisma.user.create({
    data: userInput,
  });
}

async function getByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export const userRepository = {
  create,
  getByEmail,
};
