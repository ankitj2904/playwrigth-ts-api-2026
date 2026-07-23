export const ENDPOINTS = {

    USER: {

        CREATE: '/v2/user',

        LOGIN: '/v2/user/login',

        GET: (username: string) =>
            `/v2/user/${username}`,

        UPDATE: (username: string) =>
            `/v2/user/${username}`,

        DELETE: (username: string) =>
            `/v2/user/${username}`

    },

    PET: {

        CREATE: '/v2/pet',

        FIND_BY_STATUS: 'v2/pet/findByStatus',

        GET: (id: number) =>
            `/v2/pet/${id}`,

        UPDATE: '/api/v2/pet',

        DELETE: (id: number) =>
            `/v2/pet/${id}`

    }

};