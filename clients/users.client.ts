import { APIRequestContext } from '@playwright/test';
import environment from "../config/environment";

export class UsersClient {
    constructor(private request: APIRequestContext) {}

    async getUsers(page: number) {
        return await this.request.get(
            `${environment.baseURL}api/users?page=${page}`,
            {
                headers: {
                    "x-api-key": environment.apiKey
                }
            }
        );
    }

    async createUser(payload: any) {

        return await this.request.post(
            `${environment.baseURL}api/users`,
            {
                headers: {
                    'x-api-key': environment.apiKey
                },
                data: payload
            }
        );
    }
}