import { RequestHandler } from "express";
import { PersonService } from "../services/person.service";
import { Controller } from "./controller";

export class PersonController extends Controller {

    constructor(private personService: PersonService) {
        super();
    }

    public addMeetingNotes: RequestHandler = (request, response, next) => {
        const unitId = request.query["unitId"] as string;
        this.personService.addMeetingNotes(unitId, request.body);
        response.sendStatus(201);
    }
}