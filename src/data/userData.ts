import { User } from '../models/User';
import { Random } from '../helpers/Random';

export function createUser(): User {
    return {
        id: Random.number(),
        username: Random.username(),
        firstName: Random.firstName(),
        lastName: Random.lastName(),
        email: Random.email(),
        password: Random.password(),
        phone: Random.phone(),
        userStatus: 1
    };
}