import { Router } from "express";
import createUserController from "../controllers/userControllers/createUser.controller";
import isEmailAvailableMiddleware from "../middlewares/userMiddlewares/isEmailAvailable.middleware";
import verifyTokenMiddleware from "../middlewares/userMiddlewares/verifyToken.middleware";
import isAdminMiddleware from "../middlewares/userMiddlewares/isAdmin.middleware";
import listAllUsersController from "../controllers/userControllers/listAllUsers.controller";
import listUserController from "../controllers/userControllers/listUser.controller";
import verifyUserMiddleware from "../middlewares/userMiddlewares/verifyUser.middleware";
import updateUserController from "../controllers/userControllers/updateUser.controller";
import deleteUserController from "../controllers/userControllers/deleteUser.controller";

const userRouter = Router();

userRouter.post("", isEmailAvailableMiddleware, createUserController);
userRouter.get("", verifyTokenMiddleware, isAdminMiddleware, listAllUsersController);
userRouter.get("/profile", verifyTokenMiddleware, listUserController);
userRouter.patch("/:id",  verifyTokenMiddleware, isAdminMiddleware, updateUserController);
userRouter.delete("/:id", verifyUserMiddleware, verifyTokenMiddleware, deleteUserController);
export default userRouter;
