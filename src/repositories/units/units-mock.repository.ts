import { Unit } from "../../models/unit";
import { UnitsRepository } from "./units.repository";

export class UnitsMockRepository implements UnitsRepository {
    private units: Unit[] = [
        {
            id: "100",
            name: "SL unit 1",
            people: [{
                name: 'John Doe',
                meetings: [
                    {
                        comment: 'Everything good',
                        attrition: 'None',
                        date: '01-02-2023'
                    },
                    {
                        comment: 'Doing great',
                        attrition: 'None',
                        date: '11-20-2022'
                    }]
            },
            {
                name: 'Tom Thompson',
                meetings: [
                    {
                        comment: 'Coffe could be more tasty',
                        attrition: 'Low',
                        date: '02-25-2023'
                    },
                    {
                        comment: 'Bananas could be more fresh',
                        attrition: 'Low',
                        date: '01-25-2023'
                    }]
            }]
        },
        {
            id: "200",
            name: "SL unit 2",
            people: [{
                name: 'Kevin Townsend',
                meetings: [
                    {
                        comment: 'Other sevelopers are not writing unit tests',
                        attrition: 'Medium',
                        date: '02-23-2023'
                    },
                    {
                        comment: 'There is no code review process',
                        attrition: 'Medium',
                        date: '01-23-2023'
                    }]
            },
            {
                name: 'Terry Crews',
                meetings: [
                    {
                        comment: 'Office gym is locked',
                        attrition: 'High',
                        date: '01-30-2023'
                    },
                    {
                        comment: 'Weights are too light',
                        attrition: 'High',
                        date: '12-14-2022'
                    }]
            }]
        }
    ];

    getUnits(unitIds: string[]): Unit[] {
        const units: Unit[] = [];

        unitIds.forEach(unitId => {
            const unit = this.units.find(unit => unit.id === unitId);
            if (unit) {
                units.push(unit);
            }
        })

        return units;
    }

}