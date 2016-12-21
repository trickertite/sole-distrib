Given(/^I go to create product page$/) do
  visit('/')
end

When(/^I create the following product$/) do |product|
  post products_path, product.hashes.first.to_json
end

Then(/^I should see the message 'product is successfully created'$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
