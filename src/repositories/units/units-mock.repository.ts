import { Unit } from "../../models/unit";
import { UnitsRepository } from "./units.repository";

export class UnitsMockRepository implements UnitsRepository {
    private units: Unit[] = [
        {
            id: "100",
            name: "SL unit 1",
            people: [{
                id: "1",
                name: 'John Doe',
                meetings: [
                    {
                        personId: "1",
                        notesId: "1",
                        comments: "Everything going good, cooperation with DM is ok. But coffee in the office could be more tasty",
                        questions: "1. Project satisfaction 2. Cooperation with DM",
                        managerActionItems: "Ask administration to order better coffee",
                        subordinateActionItems: "Try new coffee and write feedback",
                        importantAgreements: "",
                        satisfaction: "Happy with project and DM, only issue is coffee",
                        plans: "",
                        feedback: "John is skilled engineer",
                        issues: "",
                        attritionRisk: "Low",
                        oneToOneReportSent: true
                    },
                    {
                        personId: "1",
                        notesId: "2",
                        comments: "Doing great",
                        questions: "1. Situation on the project 2. Review Engineering goals",
                        managerActionItems: "Check ISTQB reimbursement policy",
                        subordinateActionItems: "1. Ask DM to create Delivery goals",
                        importantAgreements: "",
                        satisfaction: "Project is good",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: false
                    }]
            },
            {
                id: "2",
                name: 'Tom Thompson',
                meetings: [
                    {
                        personId: "2",
                        notesId: "3",
                        comments: "Doing great",
                        questions: "",
                        managerActionItems: "Check Azure reimbursement policy",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "Project is nice",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: false
                    },
                    {
                        personId: "2",
                        notesId: "4",
                        comments: "Bananas could be more fresh",
                        questions: "",
                        managerActionItems: "",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: true
                    }]
            }]
        },
        {
            id: "200",
            name: "SL unit 2",
            people: [{
                id: "3",
                name: 'Kevin Townsend',
                meetings: [
                    {
                        personId: "3",
                        notesId: "5",
                        comments: "test",
                        questions: "",
                        managerActionItems: "",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: true
                    },
                    {
                        personId: "3",
                        notesId: "6",
                        comments: "test",
                        questions: "",
                        managerActionItems: "",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: true
                    }]
            },
            {
                id: "4",
                name: 'Terry Crews',
                meetings: [
                    {
                        personId: "4",
                        notesId: "7",
                        comments: "Office gym is closed",
                        questions: "",
                        managerActionItems: "",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: true
                    },
                    {
                        personId: "4",
                        notesId: "8",
                        comments: "test",
                        questions: "",
                        managerActionItems: "",
                        subordinateActionItems: "",
                        importantAgreements: "",
                        satisfaction: "",
                        plans: "",
                        feedback: "",
                        issues: "",
                        attritionRisk: "None",
                        oneToOneReportSent: true
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