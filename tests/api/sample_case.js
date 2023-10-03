const { step, beforeSuite, afterSuite } = require('gauge');
const axios = require('axios');
const { expect } = require('chai');

let response;

step('Send a GET request to the API endpoint', async () => {
    response = await axios.get('https://api.restful-api.dev/objects'); // Replace with your API endpoint
});

step('Verify the response status code is 200', () => {
    expect(response.status).to.equal(200);
});

step('Verify the response body contains expected data', () => {
    expect(response.data).to.deep.include({ id: '1' }); // Replace with your expected data
});

// Optional: Before and After Suite Hooks
beforeSuite(async () => {
    // Perform any setup tasks before the suite runs
});

afterSuite(async () => {
    // Perform cleanup tasks after the suite runs
});
