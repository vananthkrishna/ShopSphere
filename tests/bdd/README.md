# BDD Scenarios

## Login

Feature: Login

Scenario: Valid User Login

- Given user opens login page
- When user enters credentials
- Then logout button appears

## Cart

Feature: Shopping Cart

Scenario: Add Product

- Given user searches product
- When product is added
- Then cart contains product
