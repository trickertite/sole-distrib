Then(/^I should see the message "([^"]*)"$/) do |message|
  expect(page).to have_content(message)
end
