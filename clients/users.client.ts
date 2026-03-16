import { APIRequestContext } from '@playwright/test';
import environment from '../config/environment';

export class UsersClient {

    constructor(private request: APIRequestContext) {}

    async listUsers() {
        return await this.request.get(`${environment.baseURL}/usuarios`);
    }

    async createUser(userData: any) {
        return await this.request.post(`${environment.baseURL}/usuarios`, {
            data: userData
        });
    }

    async getUserById(userId: string) {
        return await this.request.get(`${environment.baseURL}/usuarios/${userId}`);
    }

    async updateUser(userID: string, userData: any) {
        return await this.request.put(`${environment.baseURL}/usuarios/${userID}`, {
            data: userData
        });
    }

    async deleteUser(userId: string) {
        return await this.request.delete(`${environment.baseURL}/usuarios/${userId}`);
    }
}