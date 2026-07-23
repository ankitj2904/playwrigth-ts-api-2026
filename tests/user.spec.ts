import { test, expect } from '../src/fixtures/apiFixture';

import { UserController } from '../src/controllers/UserController';

import { createUser } from '../src/data/userData';

import { ResponseValidator } from '../src/utils/ResponseValidator';

test('Create a new user', async ({ apiClient }) => {

    const userController = new UserController(apiClient);

    const user = createUser();

    const response = await userController.createUser(user);

    await ResponseValidator.verifyStatus(response, 200);

    await ResponseValidator.verifyOk(response);

    const responseBody = await response.json();

    expect(responseBody.message).toBe(user.id.toString());

});