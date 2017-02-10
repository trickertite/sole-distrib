@javascript @auth
Feature: Sign up for user account
  As a User
  I want to sign up for an account
  So that I can access the features of this app

  Scenario: Sign Up with valid attributes
    Given I go to App Admin
    When I ask him to create an account
    Then my account should be created
