import { test, expect } from '@playwright/test';
import { UsersClient } from '../../clients/users.client';
import { UsersData } from '../../data/users.data';

test.describe('Users API', () => {

    test('should list users successfully', async ({ request }) => {

        const usersClient = new UsersClient(request);

        const response = await usersClient.getUsers(2);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.data.length).toBeGreaterThan(0);

    });

    test('should create user successfully', async ({ request }) => {

        const usersClient = new UsersClient(request);

        const response = await usersClient.createUser(UsersData.validUser);

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.name).toBe(UsersData.validUser.name);

    });

});
