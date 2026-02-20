# 🚀 QA API Automation Framework | Playwright + TypeScript

Professional API test automation framework built with Playwright and TypeScript, following enterprise-level architecture and best practices.

---

## 📌 Overview

This project demonstrates a scalable and maintainable API test automation framework using modern tools and design patterns widely adopted in the industry.

It was designed to simulate real-world QA automation scenarios, including:

* API client abstraction
* Environment configuration
* Test data management
* CI/CD readiness
* Clean architecture principles

---

## 🧰 Tech Stack

* TypeScript
* Playwright
* Node.js
* GitHub Actions (CI/CD)
* dotenv

---

## 📁 Project Structure

```
qa-api-automation-playwright
│
├── clients/        # API client layer
├── config/         # Environment and API configuration
├── data/           # Test data factory
├── fixtures/       # Custom fixtures
├── tests/          # Test cases
├── utils/          # Utilities and helpers
│
├── playwright.config.ts
├── package.json
└── .github/workflows/
```

---

## 🧪 Test Coverage

Current automated scenarios include:

* Get users list
* Create new user
* Response status validation
* Response body validation

Future improvements:

* Negative scenarios
* Schema validation
* Authentication flows
* Contract testing

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/YOUR-USERNAME/qa-api-automation-playwright.git
```

Install dependencies:

```
npm install
```

---

## 🔐 Environment Configuration

Create a `.env` file in the root directory:

```
REQRES_API_KEY=your_api_key_here
```

---

## ▶️ Running Tests

Run all tests:

```
npx playwright test
```

Run with UI:

```
npx playwright test --ui
```

View report:

```
npx playwright show-report
```

---

## 📊 Reports

Playwright provides built-in HTML reports with detailed execution logs, traces, and debugging information.

---

## 🔄 CI/CD

This project is ready for CI/CD integration using GitHub Actions.

Tests can be executed automatically on:

* Push
* Pull Requests

---

## 🧠 Architecture Highlights

This framework follows professional automation design patterns:

* API Client Pattern
* Test Data Factory Pattern
* Environment-based configuration
* Scalable folder structure
* Separation of concerns

---

## 👨‍💻 Author

Marcos Almeida
Senior QA Engineer | Test Automation | CI/CD | API Testing

Focused on building reliable, scalable, and maintainable automation solutions.

---

## ⭐ Purpose

This repository is part of my professional QA Automation portfolio, demonstrating real-world automation practices and technical expertise.
