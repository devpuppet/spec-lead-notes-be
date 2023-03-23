import { MeetingNotes } from '../models/person';
import { PersonRepository } from '../repositories/person/person.repository';
import { Service } from './service';

export class PersonService implements Service {

    constructor(private personRepository: PersonRepository) {}

    public addMeetingNotes(unitId: string, meetingNotes: MeetingNotes) {
        this.personRepository.addMeetingNotes(unitId, meetingNotes);
    }
}