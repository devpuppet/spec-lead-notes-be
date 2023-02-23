import { RequestHandler } from "express";
import { UnitsService } from "../services/units.service";
import { UserService } from "../services/user.service";
import { Controller } from "./controller";

export class UnitsController extends Controller {

    constructor(private readonly unitsService: UnitsService,
        private readonly userService: UserService) {
        super();
    }

    public getUnits: RequestHandler = (request, response, next) => {
        const user = this.userService.findUserById(request.params.userId);
        response.json(this.unitsService.getUnits(user.unitIds));
    }
}