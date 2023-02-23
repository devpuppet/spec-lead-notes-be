import { Credentials } from "../models/credentials";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user/user.repository";
import { Service } from "./service";

export class UserService implements Service {

    constructor(private userRepository: UserRepository) { }

    public findUserIdByName(name: string): User {
        return this.userRepository.findUserIdByName(name);
    }

    public getUsers(): User[] {
        return this.userRepository.getUsers();
    }

    public isValidCredentials(credentials: Credentials): boolean {
        return this.userRepository.isValidCredentials(credentials);
    }

    public findUserById(userId: string): User {
        return this.userRepository.findUserById(userId);
    }
}

