import { EmailService, MockEmailProvider } from "./EmailService.mjs";

const provider1 = new MockEmailProvider('Provider1');
const provider2 = new MockEmailProvider('Provider2');
const emailService = new EmailService([provider1, provider2]);

const email = { id: '1234', to: 'example@test.com', subject: 'Test Email', body: 'Hello World!' };
emailService.sendEmail(email).then(result => console.log(result));
