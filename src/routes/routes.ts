import { Controller } from "../controllers/controller";

export abstract class Routes {
    constructor(protected readonly controller: Controller) {
    }
}