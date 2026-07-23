import { APIResponse } from '@playwright/test';

import { ApiClient } from '../api/ApiClient';
import { ENDPOINTS } from '../constants/endpoints';
import { Pet } from '../models/Pet';

export class PetController {

    constructor(private readonly apiClient: ApiClient) {}

    async createPet(
        pet: Pet
    ): Promise<APIResponse> {

        return this.apiClient.post(
            ENDPOINTS.PET.CREATE,
            pet
        );
    }

    async getPet(
        petId: number
    ): Promise<APIResponse> {

        return this.apiClient.get(
            ENDPOINTS.PET.GET(petId)
        );
    }

    async updatePet(
        pet: Pet
    ): Promise<APIResponse> {

        return this.apiClient.put(
            ENDPOINTS.PET.UPDATE,
            pet
        );
    }

    async deletePet(
        petId: number
    ): Promise<APIResponse> {

        return this.apiClient.delete(
            ENDPOINTS.PET.DELETE(petId)
        );
    }

    async findByStatus(
        status: string
    ): Promise<APIResponse> {

        return this.apiClient.get(
            `${ENDPOINTS.PET.FIND_BY_STATUS}?status=${status}`
        );
    }
}