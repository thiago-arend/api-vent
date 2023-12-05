import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/schemaValidation.middleware';
import { userSchema } from '../schemas/user.schemas';
import { userController } from '../controllers/user.controller';
import { authenticationMiddleware } from '../middlewares/auth.middleware';

const userRouter = Router();

userRouter.post('/user', validateSchemaMiddleware(userSchema), userController.create);
userRouter.get('/users', authenticationMiddleware, userController.getAll);

export default userRouter;
