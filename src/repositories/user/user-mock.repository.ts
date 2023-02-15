import { Credentials } from "../../models/credentials";
import { User } from "../../models/user";
import { UserRepository } from "./user.repository";

export class MockUserRepository implements UserRepository {

    private users: User[] = [
        { id: '1', name: "Kamil" },
        { id: "2", name: "That Guy" }
    ];

    findUserIdByName(name: string): User {
        const user = this.users.find(user => user.name === name);

        if (!user) {
            throw Error(`User with name ${name} not found!`);
        }

        return user;
    }

    getUsers(): User[] {
        return this.users;
    }

    isValidCredentials(credentials: Credentials): boolean {
        const user = this.findUserIdByName(credentials.username);
        return user && credentials.password === 'test';
    }
}