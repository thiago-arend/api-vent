import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/user.repository';
import { invalidUserOrPassword } from '../errors/invalidUserOrPassword';
import { authRepository } from '../repositories/auth.repository';
import { LoginInput } from '../protocols';

export async function login(loginInput: LoginInput) {
  const user = await userRepository.getByEmail(loginInput.email);
  if (!user || !bcrypt.compareSync(loginInput.password, user.password)) throw invalidUserOrPassword();

  const token = generateToken(user.id); // gera token JWT
  return authRepository.create({
    token,
    userId: user.id,
  });
}

export function generateToken(id: number): string {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 1800 }); // expira em 30 min (1800 seg)
}

export const authService = {
  login,
  generateToken,
};
