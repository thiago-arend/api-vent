import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares/schemaValidation.middleware';
import { userSchema } from '../schemas/user.schemas';
import { userController } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/user', validateSchemaMiddleware(userSchema), userController.create);

export default userRouter;
