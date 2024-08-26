# Resilient Email Sending Service

## Overview

This project implements a resilient email-sending service in JavaScript, focusing on clean code, SOLID principles, and robust error handling. 

The service works with mock email providers, implements retry logic with exponential backoff, and includes unit tests. 

## Features

- Retry mechanism with exponential backoff.
- Fallback between two mock providers.
- Idempotency to prevent duplicate email sends.
- Basic rate limiting.
- Status tracking for email sending attempts.

## Requirements

- Node.js installed.

## Setup

1. Clone the repository:
   ```sh
      git clone <repository_url>
      cd email-service
   ```

3. To install dependencies:
   ```sh
   npm install
   ```
5. To execute unit tests:
   ```sh
   npm test
   ```

****Note****

Ensure that you are using the correct file extensions based on your environment. If using ES modules, `.js` files can be used with `"type": "module"` specified in `package.json`. 

****Example for .js files:****
```sh
    npx mocha tests/**/*.js
```
Alternatively, you may need to use `.mjs` extensions for ES module files. Adjust your test command accordingly if you encounter issues.

****Example for .mjs files:****
```sh
    npx mocha tests/**/*.mjs
```
4. Start The Service:
   ```sh
   npm start
   ```
   
## Assumptions

- The mock providers simulate email sending with a configurable failure rate.
- Rate limiting is basic and may need to be adapted for high-volume scenarios.
- The service is designed to work with mock providers for demonstration purposes.
- The retry and backoff logic assumes that network failures or transient issues can be resolved with retries.

## Known Issues 
**File Extensions**: Depending on your Node.js version and setup, you might need to adjust file extensions between `.js` and `.mjs.` Ensure your `package.json` correctly reflects the module type to avoid issues.

## Usage

The `EmailService` class can be integrated into any Node.js application and used to send emails with retry, fallback, and idempotency features.

## Unit Tests

Unit tests are provided using Mocha. To run tests:
```sh
npm test
```
## Contributing
Feel free to submit issues and pull requests. All contributions are welcome!😇

## License
This project is licensed under the MIT License.
