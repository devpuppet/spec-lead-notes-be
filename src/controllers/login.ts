import { RequestHandler } from "express";
import { Credentials } from "../models/credentials";
import { UserService } from "../services/user.service";
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { Controller } from "./controller";

export class LoginController extends Controller {

    private readonly PRIVATE_KEY = fs.readFileSync('./private.key', 'utf8');

    constructor(private readonly userService: UserService) {
        super();
    }

    public login: RequestHandler<Credentials> = (request, response, next) => {
        const username = request.body.username;
        const password = request.body.password;
    
        if (this.userService.isValidCredentials({ username, password })) {
            const userId = this.userService.findUserIdByName(username).id;
            const expiresIn = 120;

            const jwtBearerToken = jwt.sign({}, this.PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: expiresIn,
                subject: userId
            });

            response.status(200).json({
                jwtBearerToken: jwtBearerToken,
                expiresIn: expiresIn
            });
        } else {
            response.sendStatus(401);
        }
    }
    
    
}

