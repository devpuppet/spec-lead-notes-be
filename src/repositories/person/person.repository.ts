import { MeetingNotes } from "../../models/person";

export interface PersonRepository {
    addMeetingNotes(unitId: string, meetingNotes: MeetingNotes): MeetingNotes;
}