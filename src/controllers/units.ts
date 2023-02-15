import { RequestHandler } from "express";
import { UnitsService } from "../services/units.service";
import { Controller } from "./controller";

export class UnitsController extends Controller {

    constructor(private readonly unitsService: UnitsService) {
        super();
    }

    public getUnits: RequestHandler = (request, response, next) => {
        response.json({ units: this.unitsService.getUnits() });
    };
}