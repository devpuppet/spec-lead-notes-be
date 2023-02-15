import { Router } from "express";
import { LoginController } from "../controllers/login";
import { Routes } from "./routes";

export class LoginRoutes extends Routes {
    private _router = Router();

    constructor(loginController: LoginController) {
        super(loginController);
        this.router.post('/', loginController.login);
    }

    get router() {
        return this._router;
    }
}