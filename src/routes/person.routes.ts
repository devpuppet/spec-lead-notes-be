import { Router } from "express";
import { PersonController } from "../controllers/person.controller";
import { AuthValidator } from "../validators/auth.validator";
import { Routes } from "./routes";

export class PersonRoutes extends Routes {
    private _router = Router();

    constructor(personController: PersonController) {
        super(personController);

        const validators = [ new AuthValidator() ];

        this.router.post('/person', validators.map(val => val.validate()), personController.addMeetingNotes);
    }

    get router() {
        return this._router;
    }
}