import express from "express"
import { userLogin, userLogout, userMe, userRefreshToken, userRegister } from "../controllers/auth.controllers.js";
import { validateRegister } from "../validators/auth.validators.js";

const authRoutes = express.Router();

authRoutes.post("/register",validateRegister, userRegister);
authRoutes.post("/login",userLogin);
authRoutes.post("/refresh-token",userRefreshToken)
authRoutes.post("/logout",userLogout)
authRoutes.get("/me",userMe)




export default authRoutes;