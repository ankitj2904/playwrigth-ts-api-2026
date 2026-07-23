import { APIResponse } from '@playwright/test';

import { ApiClient } from '../api/ApiClient';
import { ENDPOINTS } from '../constants/endpoints';
import { User } from '../models/User';

export class UserController {

    constructor(private readonly apiClient: ApiClient) {}

    async createUser(user: User): Promise<APIResponse> {
        return this.apiClient.post(
            ENDPOINTS.USER.CREATE,
            user
        );
    }

    async getUser(username: string): Promise<APIResponse> {
        return this.apiClient.get(
            ENDPOINTS.USER.GET(username)
        );
    }

    async updateUser(
        username: string,
        user: User
    ): Promise<APIResponse> {

        return this.apiClient.put(
            ENDPOINTS.USER.UPDATE(username),
            user
        );
    }

    async deleteUser(
        username: string
    ): Promise<APIResponse> {

        return this.apiClient.delete(
            ENDPOINTS.USER.DELETE(username)
        );
    }
}