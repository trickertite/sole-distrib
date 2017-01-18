@javascript
Feature: Create a product
As a SoleDistributor
I want to store a product in the app
So that I don't have to manually maintain product specs.

  Scenario: creating with valid attributes
    Given I go to create product page
    When I create the following product
      | name       | category | price |
      | samsung J5 | Mobile   | 22000 |
    Then I should see the message "product is successfully created"
    And "samsung J5" should be added to product list
