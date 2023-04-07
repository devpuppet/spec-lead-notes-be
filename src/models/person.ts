export interface Person {
    id: string;
    name: string;
    grade: string;
    specializations: string[];
    location: string;
    meetings: MeetingNotes[];
}

export interface MeetingNotes {
    personId: string;
    notesId: string;
    comments: string;
    questions: string;
    managerActionItems: string;
    subordinateActionItems: string;
    importantAgreements: string;
    satisfaction: string;
    plans: string;
    feedback: string;
    issues: string;
    attritionRisk: string;
    oneToOneReportSent: boolean;
}