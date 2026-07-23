import { APIResponse } from '@playwright/test';

export class JsonHelper {

    static async getBody<T>(
        response: APIResponse
    ): Promise<T> {

        return await response.json() as T;

    }

    static async print(
        response: APIResponse
    ): Promise<void> {

        const body = await response.json();

        console.log(
            JSON.stringify(body, null, 2)
        );

    }

}