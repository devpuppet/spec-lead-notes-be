import { RequestHandler } from "express";
import { Controller } from "./controller";

export class HealthCheckController extends Controller {

    public healthCheck: RequestHandler = (request, response, next) => {
        response.status(201).json({ status: 'Running' });
    }
}