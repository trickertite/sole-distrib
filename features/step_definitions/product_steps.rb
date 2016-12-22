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
  # execute block for 10 seconds (again and again) unless the expectation get true otherwise raise the exception
  eventually(:timeout => 10) { 
    expect(Product.count).to eql(1)
  }
end
