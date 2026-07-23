import {
    test as base,
    expect,
    request,
    APIRequestContext
} from '@playwright/test';

import { ApiClient } from '../api/ApiClient';
import { config } from '../config/config';

type ApiFixtures = {

    apiClient: ApiClient;

};

export const test = base.extend<ApiFixtures>({

    apiClient: async ({}, use) => {

        const apiContext: APIRequestContext =
            await request.newContext({

                baseURL: config.baseURL,

                extraHTTPHeaders: config.headers

            });

        const apiClient = new ApiClient(apiContext);

        await use(apiClient);

        await apiContext.dispose();

    }

});

export { expect };