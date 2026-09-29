# ShopSphere — SDET Automation Framework

ShopSphere is a test automation framework built with **TypeScript, Playwright, Artillery, Docker, and GitHub Actions**.

The project demonstrates UI automation, API testing, Page Object Model (POM), data-driven testing, performance testing, containerized test execution, and CI/CD automation.

---

## Tech Stack

* **Language:** TypeScript
* **UI Automation:** Playwright
* **API Testing:** Playwright APIRequestContext
* **Performance Testing:** Artillery
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Test Architecture:** Page Object Model (POM)
* **Runtime:** Node.js 22
* **Version Control:** Git / GitHub

---

## Project Structure

```text
ShopSphere/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── api/
│   │   └── ProductApi.ts
│   │
│   └── pages/
│       ├── BasePage.ts
│       ├── LoginPage.ts
│       ├── RegisterPage.ts
│       ├── AccountInfoPage.ts
│       ├── ProductPage.ts
│       └── CartPage.ts
│
├── tests/
│   ├── ui/
│   │   ├── home.spec.ts
│   │   ├── login.spec.ts
│   │   └── cart.spec.ts
│   │
│   ├── api/
│   │   └── product.spec.ts
│   │
│   └── bdd/
│       └── login.feature
│
├── test-data/
│   └── products.json
│
├── artillery/
│   └── load.yml
│
├── utils/
│   ├── env.ts
│   └── userFactory.ts
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── .env
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## Testing Coverage

### UI Testing

The framework currently automates:

* Homepage validation
* User registration
* Account creation
* Product search
* Multiple product search scenarios

The UI tests use the **Page Object Model** to separate test logic from page interaction logic.

---

### API Testing

The framework validates the product API and verifies:

* HTTP response status
* Presence of product data
* Non-empty product response

Example API endpoint:

```text
/api/productsList
```

---

### Data-Driven Testing

Product search scenarios are driven from:

```text
test-data/products.json
```

Current test data includes:

```json
[
  { "name": "Blue Top" },
  { "name": "Men Tshirt" },
  { "name": "Sleeveless Dress" }
]
```

This allows additional test cases to be added without changing the test structure.

---

## Page Object Model

The framework uses the Page Object Model design pattern.

Page-specific behavior is separated into classes such as:

```text
LoginPage
RegisterPage
AccountInfoPage
ProductPage
CartPage
```

Common browser actions are centralized in:

```text
BasePage
```

This improves:

* Maintainability
* Reusability
* Readability
* Locator management
* Separation of concerns

---

## Performance Testing

Artillery is used to perform basic load testing.

The current scenario simulates users browsing:

```text
/
↓
/products
↓
/view_cart
```

The load profile increases traffic through multiple phases.

Configuration:

```text
artillery/load.yml
```

Run the load test with:

```bash
npm run load
```

---

## Docker

The test suite can run inside a Docker container.

Build the Docker image:

```bash
docker build -t shopsphere-sdet .
```

Run the tests:

```bash
docker run --rm --env-file .env shopsphere-sdet
```

Docker provides a consistent environment for executing the automation suite.

---

## Running Tests Locally

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npm test
```

Run UI tests:

```bash
npm run test:ui
```

Run API tests:

```bash
npm run test:api
```

Run BDD-related tests:

```bash
npm run test:bdd
```

Run performance tests:

```bash
npm run load
```

Open the Playwright report:

```bash
npm run report
```

---

## Environment Configuration

The project uses environment variables for configuration.

Example:

```text
BASE_URL=https://automationexercise.com
EMAIL=demo@test.com
PASSWORD=password123
```

The `.env` file is intentionally excluded from Git through `.gitignore`.

Sensitive credentials should not be committed to the repository.

GitHub Actions currently supplies the required `BASE_URL` directly through the workflow configuration.

---

## CI/CD

GitHub Actions automatically executes the Playwright test suite when changes are pushed to the `main` branch or when a pull request is created.

The pipeline performs:

```text
Checkout
   ↓
Node.js setup
   ↓
Dependency installation
   ↓
Playwright browser installation
   ↓
Automated test execution
   ↓
Playwright report upload
```

Workflow:

```text
.github/workflows/playwright.yml
```

---

## Test Reporting

Playwright generates an HTML test report.

The report can be viewed locally using:

```bash
npm run report
```

GitHub Actions also uploads the Playwright report as a workflow artifact.

---

## Engineering Practices Demonstrated

This project demonstrates several practices commonly used in SDET environments:

* Automated UI testing
* API testing
* Page Object Model
* Data-driven testing
* Environment-based configuration
* Test isolation
* Automated test reporting
* Performance testing
* Dockerized test execution
* CI/CD integration
* Git-based development workflow
* TypeScript-based automation

---

## Current Test Suite

The current automated suite validates:

```text
UI Tests
├── Homepage loads successfully
├── User registration
├── Product search — Blue Top
├── Product search — Men Tshirt
└── Product search — Sleeveless Dress

API Tests
└── Products API returns 200
```

Total current automated tests:

```text
6
```

---

## Future Improvements

Potential future enhancements include:

* Executable Cucumber BDD integration
* API Page Object / service layer expansion
* Authentication fixtures
* More negative test scenarios
* Accessibility testing
* Cross-browser execution
* Parallel CI execution
* Advanced Artillery scenarios
* Allure reporting
* Test tagging
* Retry and quarantine strategies
* Additional API contract validation
* Database validation
* Slack or email CI notifications

---

## Project Goal

The goal of ShopSphere is to demonstrate how a modern SDET automation framework can combine:

**UI + API + Performance + Docker + CI/CD**

within a maintainable TypeScript-based test architecture.
