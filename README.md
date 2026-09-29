# ShopSphere — SDET Automation Framework

ShopSphere is a **TypeScript-based SDET automation framework** built with Playwright, Cucumber, Artillery, Docker, and GitHub Actions.

The project demonstrates a maintainable approach to automated **UI testing, API testing, BDD testing, data-driven testing, cross-browser testing, performance testing, containerized execution, test reporting, and CI/CD**.

---

## Tech Stack

| Area                 | Technology                   |
| -------------------- | ---------------------------- |
| Programming Language | TypeScript                   |
| UI Automation        | Playwright                   |
| API Testing          | Playwright APIRequestContext |
| BDD                  | Cucumber                     |
| Performance Testing  | Artillery                    |
| Containerization     | Docker                       |
| CI/CD                | GitHub Actions               |
| Test Architecture    | Page Object Model (POM)      |
| Runtime              | Node.js 22                   |
| Version Control      | Git / GitHub                 |

---

## Architecture

ShopSphere separates test logic, page interactions, API interactions, test data, and environment configuration.

```text
ShopSphere/
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── api/
│   │   └── ApiClient.ts
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
│   │   ├── negative-login.spec.ts
│   │   └── cart.spec.ts
│   │
│   ├── api/
│   │   └── product.spec.ts
│   │
│   └── bdd/
│       ├── features/
│       │   └── login.feature
│       ├── steps/
│       │   └── login.steps.ts
│       └── support/
│           └── world.ts
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
├── cucumber.js
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## Test Coverage

### UI Testing

The Playwright UI suite currently covers:

* Homepage validation
* User registration
* Account creation
* Product search
* Data-driven product searches
* Invalid login validation

The UI tests use the **Page Object Model** to separate test scenarios from browser interaction logic.

---

### API Testing

The framework uses Playwright's `APIRequestContext` for API testing.

The current API test validates the products endpoint:

```text
https://automationexercise.com/api/productsList
```

The test verifies:

* HTTP status code
* Presence of the product collection
* Non-empty product response
* Product `id`
* Product `name`

---

### BDD Testing

Cucumber is integrated with Playwright to support behavior-driven development.

Current feature:

```text
tests/bdd/features/login.feature
```

The scenario covers:

```text
Valid user login
```

The BDD implementation uses:

* Cucumber feature files
* Step definitions
* A custom Cucumber World
* Playwright browser/context/page management
* Existing Page Object classes

Run the BDD suite with:

```bash
npm run test:bdd
```

---

## Page Object Model

ShopSphere follows the **Page Object Model (POM)** design pattern.

Page-specific behavior is encapsulated in:

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

This architecture helps provide:

* Separation of concerns
* Reusable page interactions
* Centralized locators
* Improved test readability
* Easier maintenance

---

## Data-Driven Testing

Product search scenarios are generated from:

```text
test-data/products.json
```

Current test data:

```json
[
  { "name": "Blue Top" },
  { "name": "Men Tshirt" },
  { "name": "Sleeveless Dress" }
]
```

The test dynamically creates a Playwright test for each product.

This allows additional product scenarios to be added through test data without duplicating test logic.

---

## Test Data Generation

Dynamic user registration data is generated through:

```text
utils/userFactory.ts
```

The factory generates a unique email address using a timestamp.

This prevents registration tests from repeatedly attempting to create the same account.

Passwords are passed into the account page object rather than being hardcoded inside the page object.

---

## Negative Testing

The framework includes negative authentication testing.

Current scenario:

```text
Invalid login credentials show error message
```

The test verifies that the application displays:

```text
Your email or password is incorrect!
```

This demonstrates validation of expected application behavior for invalid input rather than only testing successful workflows.

---

## Cross-Browser Testing

Playwright is configured to execute the test suite against:

* Chromium
* Firefox
* WebKit

The configured browsers are defined in:

```text
playwright.config.ts
```

Example:

```text
Chromium
Firefox
WebKit
```

The complete Playwright suite has been validated across all three browser projects.

Run an individual browser project with:

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

---

## TypeScript Validation

The project includes a TypeScript type-checking step:

```bash
npm run typecheck
```

This executes:

```bash
tsc --noEmit
```

Type checking is also executed as part of the GitHub Actions CI pipeline.

---

## Performance Testing

Artillery is used for basic load testing.

The current scenario exercises:

```text
/
↓
/products
↓
/view_cart
```

The load profile increases the request arrival rate through multiple phases.

Configuration:

```text
artillery/load.yml
```

Run the performance test with:

```bash
npm run load
```

---

## Docker

The automation suite can be executed inside a Docker container.

Build the image:

```bash
docker build -t shopsphere-sdet .
```

Run the tests:

```bash
docker run --rm --env-file .env shopsphere-sdet
```

The Docker image installs the project dependencies and Playwright browsers before executing the test suite.

This provides a consistent execution environment independent of the local machine configuration.

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/vananthkrishna/ShopSphere.git
```

### 2. Enter the project directory

```bash
cd ShopSphere
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Configure environment variables

Create a `.env` file in the project root:

```text
BASE_URL=https://automationexercise.com
EMAIL=demo@test.com
PASSWORD=password123
```

Do not commit `.env` to Git.

---

## Test Commands

Run the complete Playwright suite:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run API tests:

```bash
npm run test:api
```

Run BDD tests:

```bash
npm run test:bdd
```

Run TypeScript type checking:

```bash
npm run typecheck
```

Run Artillery performance tests:

```bash
npm run load
```

Open the Playwright HTML report:

```bash
npm run report
```

---

## Test Reporting

Playwright is configured with:

* List reporter
* HTML reporter
* Screenshots on failure
* Video retention on failure
* Trace collection on first retry

The HTML report can be opened locally with:

```bash
npm run report
```

GitHub Actions also uploads the generated Playwright report as a workflow artifact.

---

## CI/CD

ShopSphere uses GitHub Actions for continuous integration.

Workflow:

```text
.github/workflows/playwright.yml
```

The workflow runs on:

* Pushes to `main`
* Pull requests

The pipeline performs:

```text
Checkout repository
        ↓
Setup Node.js 22
        ↓
Install dependencies
        ↓
Install Playwright browsers
        ↓
TypeScript type check
        ↓
Run Cucumber BDD tests
        ↓
Run Playwright tests
        ↓
Upload Playwright report
```

The CI workflow has been successfully executed against the repository.

---

## Current Automated Test Suite

The current Playwright test suite contains **7 test cases per browser project**:

```text
UI
├── Homepage loads successfully
├── Complete user registration
├── Invalid login credentials show error message
└── Data-driven product search
    ├── Blue Top
    ├── Men Tshirt
    └── Sleeveless Dress

API
└── Products API returns 200
```

With three configured browser projects:

```text
Chromium → 7 tests
Firefox  → 7 tests
WebKit   → 7 tests
```

Total Playwright executions:

```text
21
```

The BDD suite is executed separately through Cucumber:

```text
1 scenario
5 steps
```

---

## Quality and Engineering Practices

ShopSphere demonstrates:

* TypeScript-based test automation
* Page Object Model
* UI automation
* API testing
* Positive testing
* Negative testing
* Data-driven testing
* Dynamic test data generation
* BDD with Cucumber
* Cross-browser testing
* Environment-based configuration
* TypeScript type checking
* Test isolation
* HTML test reporting
* Failure screenshots
* Failure video capture
* Trace collection
* Performance testing
* Dockerized execution
* GitHub Actions CI/CD
* Git-based development workflow

---

## Project Status

The framework currently provides an end-to-end automated testing setup covering:

```text
UI
+
API
+
BDD
+
Cross-Browser
+
Performance
+
Docker
+
Reporting
+
CI/CD
```

The project is intended as a portfolio demonstration of SDET automation practices using a modern TypeScript testing stack.

---

## Future Improvements

Potential future enhancements include:

* Authentication fixtures
* Expanded API service layer
* Additional API contract validation
* More negative UI scenarios
* Accessibility testing
* Advanced Artillery scenarios
* Allure reporting
* Test tagging and selective execution
* Database validation
* CI notifications
* Additional application workflows
* Expanded BDD feature coverage

````

### Next step

Don't paste this manually into Notepad. Since this is a **repository file we're intentionally updating**, we'll do it carefully.

First, save the current README as a safety copy:

```cmd
copy README.md README.backup.md
````

Then I'll give you the exact command to replace `README.md`, and we'll verify the resulting file before committing it.

**Do not commit `README.backup.md`** — we'll remove it after verifying the new README.
