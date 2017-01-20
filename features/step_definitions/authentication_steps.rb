Given(/^I go to App Admin$/) do
  appAdmin
end

When(/^I ask him to create an account$/) do
  appAdmin.createUser(testUser)
end

Then(/^my account should be created$/) do
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I should be given my credentials$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
