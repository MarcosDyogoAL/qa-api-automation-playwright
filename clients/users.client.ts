import { APIRequestContext } from '@playwright/test';
import { API_CONFIG } from '../config/api.config';
import { ENV } from '../utils/env';

export class UsersClient {

    constructor(private request: APIRequestContext) {}

    async getUsers(page: number = 1) {

        return await this.request.get(
            `${API_CONFIG.BASE_URL}/users?page=${page}`,
            {
                headers: {
                    'x-api-key': ENV.REQRES_API_KEY
                }
            }
        );
    }

    async createUser(payload: any) {

        return await this.request.post(
            `${API_CONFIG.BASE_URL}/users`,
            {
                headers: {
                    'x-api-key': ENV.REQRES_API_KEY
                },
                data: payload
            }
        );
    }
}
