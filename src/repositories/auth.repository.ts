import prisma from '../config/database';
import { SessionInput } from '../protocols';

function create(session: SessionInput) {
  return prisma.session.create({
    data: session,
  });
}

export const authRepository = {
  create,
};
