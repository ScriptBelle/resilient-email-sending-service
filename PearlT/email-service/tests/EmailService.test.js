// tests/EmailService.test.js
// const assert = require('assert');
import assert from 'assert;

const { EmailService, MockEmailProvider } = require('../src/services/EmailService');

describe('EmailService', () => {
  it('should send email successfully with the first provider', async () => {
    const provider1 = new MockEmailProvider('Provider1', 0);
    const provider2 = new MockEmailProvider('Provider2', 1);
    const emailService = new EmailService([provider1, provider2]);
    
    const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
    const result = await emailService.sendEmail(email);
    assert.strictEqual(result.status, 'success');
  });

  it('should fallback to the second provider', async () => {
    const provider1 = new MockEmailProvider('Provider1', 1);
    const provider2 = new MockEmailProvider('Provider2', 0);
    const emailService = new EmailService([provider1, provider2]);
    
    const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
    const result = await emailService.sendEmail(email);
    assert.strictEqual(result.status, 'success');
  });

  it('should handle retry and eventual failure', async () => {
    const provider1 = new MockEmailProvider('Provider1', 1);
    const provider2 = new MockEmailProvider('Provider2', 1);
    const emailService = new EmailService([provider1, provider2], 2);
    
    const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
    const result = await emailService.sendEmail(email);
    assert.strictEqual(result.status, 'failure');
  });
});

   

// describe('EmailService', () => {
//     it('should send email successfully with the first provider', async () => {
//         const provider1 = new MockEmailProvider('Provider1', 0);
//         const provider2 = new MockEmailProvider('Provider2', 1);
//         const emailService = new EmailService([provider1, provider2]);
        
//         const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
//         const result = await emailService.sendEmail(email);
//         assert.strictEqual(result.status, 'success');
//     });

//     it('should fallback to the second provider', async () => {
//         const provider1 = new MockEmailProvider('Provider1', 1);
//         const provider2 = new MockEmailProvider('Provider2', 0);
//         const emailService = new EmailService([provider1, provider2]);
        
//         const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
//         const result = await emailService.sendEmail(email);
//         assert.strictEqual(result.status, 'success');
//     });

//     it('should handle retry and eventual failure', async () => {
//         const provider1 = new MockEmailProvider('Provider1', 1);
//         const provider2 = new MockEmailProvider('Provider2', 1);
//         const emailService = new EmailService([provider1, provider2], 2);
        
//         const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
//         const result = await emailService.sendEmail(email);
//         assert.strictEqual(result.status, 'failure');
//     });
//     });
