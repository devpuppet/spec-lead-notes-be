import { Router } from "express";
import { UnitsController } from "../controllers/units";
import { AuthValidator } from "../validators/auth.validator";
import { Routes } from "./routes";

export class UnitsRoutes extends Routes {
    private _router = Router();

    constructor(unitsController: UnitsController) {
        super(unitsController);

        const validators = [ new AuthValidator() ];

        this.router.get('/:userId/units', validators.map(val => val.validate()), unitsController.getUnits);
    }

    get router() {
        return this._router;
    }

}