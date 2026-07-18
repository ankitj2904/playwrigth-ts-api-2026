# Playwright TypeScript PetStore API Automation Framework 🎭

A production-grade, modular API test automation framework engineered using **Playwright** and **TypeScript** to validate the REST endpoints of the Swagger PetStore platform. 

This repository leverages an enterprise **API Controller design pattern** (an adaptation of the Page Object Model for backend services) to completely separate HTTP request/response handling from test validation logic, resulting in highly maintainable and clean automation code.

---

## 🛠️ Tech Stack & Key Features

*   **Automation Engine:** Playwright Test Runner (v1.x)
*   **Language Environment:** TypeScript (Strict Type Safety)
*   **Design Pattern:** API Controller / POM Architecture
*   **Data Management:** Decoupled JSON Data-Driven Drivers
*   **Execution Strategy:** Fully Parallel Execution Runs

---

## 🏛️ Project Architecture & Component Layout

The repository structure isolates data payload blueprints from operational API request wrappers and test specifications:

```text
petstore-api-automation/
├── src/
│   ├── controllers/
│   │   └── PetController.ts    # API Controller Layer (Decouples endpoints and HTTP requests)
│   └── data/
│       └── petData.json        # Test Data Driver Layer (Decoupled payloads)
├── tests/
│   └── petstore.test.ts        # Test Suite execution layer containing core assertions
├── package.json                # Framework script lifecycles and dependencies
└── playwright.config.ts        # Global Playwright configuration profile
