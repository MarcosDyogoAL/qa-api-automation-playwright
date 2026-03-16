import { APIRequestContext } from '@playwright/test';
import environment from "../config/environment";

export class AuthClient {

    constructor(private request: APIRequestContext) {}

    async login(email: string, password: string) {

        return await this.request.post(
            `${environment.baseURL}/login`, {
            headers: this.getHeaders(),
            data: {
                email,
                password
            }
        });
    }

    private getHeaders() {
        return {
            'x-api-key': environment.apiKey,
            'Content-Type': 'application/json'
        };
    }
}