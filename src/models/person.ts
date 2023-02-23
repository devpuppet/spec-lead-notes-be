export interface Person {
    name: string;
    meetings: Meeting[];
}

export interface Meeting {
    comment: string;
    attrition: string;
    date: string
}