@javascript
Feature: Display Product/Products
  As a SoleDistributor
  I want to view the product/products
  So that I get a glimpse of my products

  Scenario: view all products
    Given I have following products
      | name      | category | price |  
      | Huaweip8  | Mobile   | 1100  |  
      | Iphone7s  | Mobile   | 1200  |  
      | samsungj5 | Mobile   | 1300  |   
    When I go to root page
    Then I should see the following products
      | name      | category | price |  
      | Huaweip8  | Mobile   | 1100  |  
      | Iphone7s  | Mobile   | 1200  |  
      | samsungj5 | Mobile   | 1300  |
