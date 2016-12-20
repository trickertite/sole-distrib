Given(/^I go to create product page$/) do
  visit('/products/new')
end

When(/^I create the following product$/) do |table|
  # table is a Cucumber::MultilineArgument::DataTable
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I should see the message 'product is successfully created'$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
