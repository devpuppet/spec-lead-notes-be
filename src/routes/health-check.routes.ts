import { Router } from "express";
import { HealthCheckController } from "../controllers/health-check-controller";
import { Routes } from "./routes";

export class HealthCheckRoutes extends Routes {
    private _router = Router();

    constructor(healthCheckController: HealthCheckController) {
        super(healthCheckController);

        this.router.get('/', healthCheckController.healthCheck);
    }

    get router() {
        return this._router;
    }
}