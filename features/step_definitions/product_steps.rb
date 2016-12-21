Given(/^I go to create product page$/) do
  visit('/')
  click_on 'Create Product'
end

When(/^I create the following product$/) do |products|
  product = products.hashes.first
  fill_in('name', {with: product['name']})
  fill_in('price', {with: product['price']})
  select(product['category'], {from: 'category'})
  click_button('Submit')
end

Then(/^the product should be saved$/) do
  expect(Product.count).to eq(1)
end

Then(/^I should see the message 'product is successfully created'$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
