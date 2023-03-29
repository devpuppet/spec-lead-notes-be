import { MeetingNotes, Person } from "../../models/person";
import { PersonRepository } from "./person.repository";
import { UnitsMockRepository } from '../units/units-mock.repository';
import { Unit } from "../../models/unit";

export class PersonMockRepository implements PersonRepository {

    constructor(private readonly unitsMockRepository: UnitsMockRepository) {}

    addMeetingNotes(unitId: string, meetingNotes: MeetingNotes): MeetingNotes {
        
        const unit = this.unitsMockRepository.getUnits([unitId])[0];

        if (!unit) {
            throw Error(`No unit with ID = ${unitId} found!`);
        }

        const person = this.findPersonById(unit, meetingNotes.personId);
        meetingNotes.notesId = `${unitId}${meetingNotes.personId}${Date.now().toString()}`;

        person.meetings.push(meetingNotes);

        return meetingNotes;
    }

    private findPersonById(unit: Unit, personId: string): Person {
        const person = unit.people.find(person => person.id === personId);

        if (!person) {
            throw Error(`No person with ID = ${personId} found!`);
        }

        return person
    }
    
}