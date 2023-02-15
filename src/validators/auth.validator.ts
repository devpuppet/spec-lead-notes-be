import { expressjwt } from "express-jwt";
import { Validator } from "./validator";
import * as fs from 'fs';

export class AuthValidator implements Validator {

    validate() {
        const PUBLIC_KEY = fs.readFileSync('./public.key');

        return expressjwt({
            secret: PUBLIC_KEY,
            algorithms: ["RS256"]
        });
    }
}