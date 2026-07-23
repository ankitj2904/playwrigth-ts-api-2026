import { Pet } from '../models/Pet';
import { Random } from '../helpers/Random';

export function createPet(): Pet {
    return {
        id: Random.number(),
        category: {
            id: 1,
            name: 'Dogs'
        },
        name: Random.petName(),
        photoUrls: [
            'https://petstore.swagger.io/images/dog.jpg'
        ],
        tags: [
            {
                id: 1,
                name: 'Playwright'
            }
        ],
        status: 'available'
    };
}