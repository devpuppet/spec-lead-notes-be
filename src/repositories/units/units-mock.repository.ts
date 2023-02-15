import { Unit } from "../../models/unit";
import { UnitsRepository } from "./units.repository";

export class UnitsMockRepository implements UnitsRepository {
    private units: Unit[] = [
        {
            id: "1",
            name: "SL unit 1"
        },
        {
            id: "2",
            name: "SL unit 2"
        }
    ];

    getUnits(): Unit[] {
        return this.units;
    }
    
}