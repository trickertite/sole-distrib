Given(/^I go to App Admin$/) do
  appAdmin.visitPage
end

When(/^I ask him to create an account$/) do
  appAdmin.createUserAccount(createTestUser)
end

Then(/^my account should be created$/) do
  eventually(:timeout => 10) {
    expect(User.count).to eq(1)
    expect(User.first[:first_name]).to eq(testUser[:first_name])
  }
end
