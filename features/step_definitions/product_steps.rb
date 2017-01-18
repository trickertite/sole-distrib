Given(/^I go to create product page$/) do
  visit('/')
  click_on 'Create Product'
end

When(/^I create the following product$/) do |products|
  createProduct(products.hashes.first)
end

Given(/^I have following products$/) do |table|
  table.hashes.each do |product|
    step "I go to create product page"
    createProduct(product)
  end
  eventually(:timeout => 10) { 
    expect(Product.count).to eql(3)
  }
end

Then(/^I should see the following products$/) do |table|
  expect(find('ul.products').all('li').size).to eq(3)
end

And(/^"([^"]*)" should be added to product list$/) do |product_name|
  expect(page).to have_content(product_name)
end
