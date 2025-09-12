
import { test, expect } from '@playwright/test'
const token = '3bc87675be6f4adc53980d0eed71e9c7b3a34d093e20f989829de46b5a8c0d6a';
test('api testing get method validation ', async ({ request }) => {
    const baseURL = 'https://gorest.co.in';
    const response = await request.get(`${baseURL}/public/v2/users`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    const reqBody = await response.json();
    console.log(reqBody);
    expect(response.status()).toBe(200);
    expect(reqBody[0].name).toBe('Param Dubashi');
    expect(reqBody[0].email).toBe('param_dubashi@jones.test')
    expect(reqBody[1].name).toBe('Karthik Ganaka');

});