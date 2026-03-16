import { test, expect } from '@playwright/test';
import environment from '../../config/environment';
import {UsersData} from "../../data/users.data";
import {AuthClient} from "../../clients/auth.client";

test.describe('Auth API', () => {

    test('should authenticate user successfully', async ({ request }) => {

        const user = UsersData.validLogin

        const authClient = new AuthClient(request);
        const response = await authClient.login(user.email, user.password);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.authorization).toBeDefined();

        expect(body.message).toBe('Login realizado com sucesso');

    });

});