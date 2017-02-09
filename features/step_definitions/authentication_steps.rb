Given(/^I go to App Admin$/) do
  appUser.visitPage
end

When(/^I ask him to create an account$/) do
  appUser.createUserAccount
end

Then(/^my account should be created$/) do
  eventually(:timeout => 10) {
    expect(User.count).to eq(1)
    expect(User.first[:first_name]).to eq(appUser.info[:first_name])
  }
end

Given(/^I have signed Up successfully$/) do
  steps %Q{
    Given I go to App Admin
    When I ask him to create an account
    Then my account should be created
  }
end

When(/^I ask appAdmin to login my account$/) do
  appUser.loginUserAccount
end
