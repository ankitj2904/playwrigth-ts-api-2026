import { APIResponse, expect } from '@playwright/test';

export class ResponseValidator {

    static async verifyStatus(
        response: APIResponse,
        expectedStatus: number
    ): Promise<void> {

        expect(
            response.status(),
            `Expected status ${expectedStatus} but received ${response.status()}`
        ).toBe(expectedStatus);

    }

    static async verifyOk(
        response: APIResponse
    ): Promise<void> {

        expect(
            response.ok(),
            'Response is not successful'
        ).toBeTruthy();

    }

    static async verifyJsonValue<T>(
        response: APIResponse,
        key: keyof T,
        expectedValue: T[keyof T]
    ): Promise<void> {

        const body = await response.json() as T;

        expect(body[key]).toBe(expectedValue);

    }

}