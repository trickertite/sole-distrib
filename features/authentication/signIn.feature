@javascript @auth 
Feature: Sign In for user account
  As a User
  I want to sign in through my account
  So that I can access the features of this app

  Scenario: Sign In with valid attributes
    Given I have signed Up successfully
    When I ask appAdmin to login my account
    Then I should see the message "login successfully"
    And I should be redirected to "products page"
