# Resilient Email Sending Service

## Overview

This project implements a resilient email sending service in JavaScript with the following features:
- Retry mechanism with exponential backoff.
- Fallback between two mock providers.
- Idempotency to prevent duplicate email sends.
- Basic rate limiting.
- Status tracking for email sending attempts.

## Requirements

- Node.js installed.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm test` to execute unit tests.

## Assumptions

- The mock providers simulate email sending with a configurable failure rate.
- Rate limiting is basic and may need to be adapted for high-volume scenarios.

## Usage

The `EmailService` class can be integrated into any Node.js application and used to send emails with retry, fallback, and idempotency features.

## Unit Tests

Unit tests are provided using Mocha. To run tests:
```sh
npm test
