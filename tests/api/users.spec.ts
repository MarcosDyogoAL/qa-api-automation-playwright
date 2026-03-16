import { test, expect } from '@playwright/test';
import { UsersClient } from '../../clients/users.client';
import { generateUser } from '../../data/users.data';

test.describe('Users API', () => {

    test('should list users', async ({ request }) => {

        const usersClient = new UsersClient(request);
        const response = await usersClient.listUsers();

        expect(response.status()).toBe(200);
        const body = await response.json();

        expect(body.usuarios).toBeDefined();

    });


    test('should create user successfully', async ({ request }) => {

        const usersClient = new UsersClient(request);
        const newUser = generateUser();
        const response = await usersClient.createUser(newUser);

        expect(response.status()).toBe(201);
        const body = await response.json();

        expect(body.message).toBe('Cadastro realizado com sucesso');

    });


    test('should get user by id', async ({ request }) => {

        const usersClient = new UsersClient(request);
        const newUser = generateUser();
        const createResponse = await usersClient.createUser(newUser);
        const createBody = await createResponse.json();
        const userId = createBody._id;
        const getResponse = await usersClient.getUserById(userId);

        expect(getResponse.status()).toBe(200);

    });

    test('should update user successfully', async ({ request }) => {

        const updateUser = generateUser();
        const newUser = generateUser();

        const usersClient = new UsersClient(request);

        const createResponse = await usersClient.createUser(newUser);
        const createBody = await createResponse.json();
        const userId = createBody._id;

        const updateResponse = await usersClient.updateUser(userId, updateUser);

        expect(updateResponse.status()).toBe(200);

    });


    test('should delete user', async ({ request }) => {

        const usersClient = new UsersClient(request);
        const newUser = generateUser();
        const createResponse = await usersClient.createUser(newUser);
        const createBody = await createResponse.json();
        const userId = createBody._id;
        const deleteResponse = await usersClient.deleteUser(userId);

        expect(deleteResponse.status()).toBe(200);

    });

});