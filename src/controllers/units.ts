import { RequestHandler } from "express";
import { UnitsService } from "../services/units.service";
import { Controller } from "./controller";

export class UnitsController extends Controller {

    constructor(private readonly unitsService: UnitsService) {
        super();
    }

    public getUnit: RequestHandler = (request, response, next) => {
        response.json(this.unitsService.getUnit(request.params.userId));
    }
}