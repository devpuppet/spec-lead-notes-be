import { Unit } from "../../models/unit";
import { UnitsRepository } from "./units.repository";

export class UnitsMockRepository implements UnitsRepository {
    private units: Unit[] = [
        {
            id: "100",
            userId: "1",
            name: "SL unit 1"
        },
        {
            id: "200",
            userId: "2",
            name: "SL unit 2"
        }
    ];

    getUnits(): Unit[] {
        return this.units;
    }

    getUnit(userId: string): Unit {
        const unit = this.getUnits().find(unit => unit.userId === userId);

        if (!unit) {
            throw new Error(`No Unit found for userId = ${userId}`);
        }

        return unit;
    }
    
}