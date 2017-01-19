Given(/^I go to App Admin$/) do
  appAdmin
end

When(/^I ask him to create an account$/) do
  user = {
    first_name: 'hassan',
    last_name: 'ali',
    age: 24,
    email: 'trickertite@gmail.com',
    password: 'top_secret'
  }
  appAdmin.createUser(user)
end

Then(/^my account should be created$/) do
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I should be given my credentials$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
