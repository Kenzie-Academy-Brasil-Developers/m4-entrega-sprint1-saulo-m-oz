import { Router } from "express";
import verifyEmailAndPasswordMiddleware from "../middlewares/userMiddlewares/verifyEmailAndPassword.middleware";
import loginUserController from "../controllers/userControllers/loginUser.controller";


const loginRouter = Router();

loginRouter.post("", verifyEmailAndPasswordMiddleware, loginUserController);

export {loginRouter};
