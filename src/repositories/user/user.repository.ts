import { Credentials } from "../../models/credentials";
import { User } from "../../models/user";

export interface UserRepository {
    findUserIdByName(name: string): User;
    getUsers(): User[];
    isValidCredentials(credentials: Credentials): boolean;
}