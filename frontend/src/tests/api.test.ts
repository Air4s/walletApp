const axios = require("axios");

const axiosInstance = axios.create();

const baseURL = "http://192.168.1.10:5432";

test("Test getWalletApi", async () => {
  const response = await axios.get(`${baseURL}/balance`, {
    params: { user_id: 1 },
  });

  // Assert that the status code is 200 (OK)
  expect(response.status).toEqual(200);

  // Assert that the response.data.balance is present
  expect(response.data.balance).toBeDefined();
});

test("Test walletCashInApi", async () => {
  // Define the amount here to test the API (minimum 100)
  const amount = 200;

  const response = await axios.post(`${baseURL}/credit`, {
    user_id: 1,
    amount,
  });

  // Assert that the status code is 200 (OK)
  expect(response.status).toEqual(200);

  // Assert that the response data matches the expected response
  expect(amount).toBeGreaterThan(99);
});

test("Test walletDebitApi", async () => {
  // Define the amount here to test the API (minimum 1)
  const amount = 50;

  const response = await axios.post(`${baseURL}/debit`, {
    user_id: 1,
    amount,
  });

  // Assert that the status code is 200 (OK)
  expect(response.status).toEqual(200);

  // Assert that the response data matches the expected response
  expect(amount).toBeGreaterThan(0);
});
