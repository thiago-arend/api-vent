import { User, Session } from '@prisma/client';

export type UserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type LoginInput = Omit<UserInput, 'name'>;
export type SessionInput = Omit<Session, 'id' | 'createdAt' | 'updatedAt'>;
