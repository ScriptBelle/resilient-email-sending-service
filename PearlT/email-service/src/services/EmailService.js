    // src/services/EmailService.js

export class EmailService {
  constructor(providers, maxRetries = 3, rateLimit = 5) {
    this.providers = providers;
    this.maxRetries = maxRetries;
    this.rateLimit = rateLimit;
    this.sentEmails = new Set(); // Idempotency
    this.status = {}; // Status tracking
    this.retryDelay = 1000; // Initial delay in ms for backoff
  }

  async sendEmail(email) {
    if (this.sentEmails.has(email.id)) {
      return { status: 'duplicate', message: 'Email already sent' };
    }

    this.status[email.id] = { attempts: 0, provider: null };

    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      if (this.sentEmails.size >= this.rateLimit) {
        await this.sleep(1000); // Basic rate limiting
      }

      for (let provider of this.providers) {
        this.status[email.id].provider = provider.name;
        try {
          await provider.send(email);
          this.sentEmails.add(email.id);
          this.status[email.id].attempts = attempt + 1;
          return { status: 'success', message: 'Email sent successfully' };
        } catch (error) {
          this.status[email.id].attempts++;
          console.log(`Attempt ${attempt + 1} failed with ${provider.name}: ${error.message}`);
        }
      }
      await this.sleep(this.retryDelay * Math.pow(2, attempt)); // Exponential backoff
    }

    return { status: 'failure', message: 'All providers failed' };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export class MockEmailProvider {
  constructor(name, failRate = 0.5) {
    this.name = name;
    this.failRate = failRate;
  }

  async send(email) {
    if (Math.random() < this.failRate) {
      throw new Error('Simulated provider failure');
    }
    return true;
  }
}
