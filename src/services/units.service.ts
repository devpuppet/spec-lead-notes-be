import { Unit } from "../models/unit";
import { UnitsRepository } from "../repositories/units/units.repository";
import { Service } from "./service";

export class UnitsService implements Service {

    constructor(private unitsRepository: UnitsRepository) {}

    public getUnits(unitIds: string[]): Unit[] {
        return this.unitsRepository.getUnits(unitIds);
    }

}