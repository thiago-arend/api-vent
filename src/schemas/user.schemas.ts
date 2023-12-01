import joi from 'joi';
import { UserInput } from '../protocols/index';

export const userSchema = joi.object<UserInput>({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
