Given(/^I go to App Admin$/) do
  appAdmin
end

When(/^I ask him to create an account$/) do
  appAdmin.createUserAccount(testUser)
end

Then(/^my account should be created$/) do
  expect(User.first).to eq(1)
  expect(User.first.first_name).to eq(testUser.first_name)
end

Then(/^I should be given my credentials$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
