Before('@secure') do
  visit('/')
  appUser.createUserAccount
  appUser.loginUserAccount
end
