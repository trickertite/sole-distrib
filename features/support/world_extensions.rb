module KnowProduct
  def createProduct(product)
    fill_in('name', {with: product['name']})
    fill_in('price', {with: product['price']})
    select(product['category'], {from: 'category'})
    click_button('Submit')
  end
end

World(KnowProduct)

module KnowUser
  class AppUser
    include Capybara::DSL

    def initialize
      first_name = Faker::Name.first_name
      @user = {
        first_name: first_name,
        last_name: Faker::Name.last_name,
        age: Faker::Number.between(15, 25),
        email: Faker::Internet.free_email(first_name),
        password: Faker::Internet.password(8)
      }
    end

    def info
      @user
    end

    def visitPage
      visit('/')
    end

    def createUserAccount()
      click_link('Register')
      within('#signUp'){fill_in('email', {with: @user[:email]})}
      within('#signUp'){fill_in('password', {with: @user[:password]})}
      within('#signUp'){fill_in('first_name', {with: @user[:first_name]})}
      within('#signUp'){click_button('Submit')}
    end

    def loginUserAccount
      click_link('Register')
      within('#signIn'){fill_in('email', {with: @user[:email]})}
      within('#signIn'){fill_in('password', {with: @user[:password]})}
      within('#signIn'){click_button('Submit')}
    end
  end

  def appUser
    @appUser ||= AppUser.new
  end
end

World(KnowUser)

# module KnowAdmin
#   # class AppAdmin
#   #   include Capybara::DSL
#   #
#   #   def createUserAccount(user)
#   #     click_link('Register')
#   #     within('#signUp'){fill_in('email', {with: user[:email]})}
#   #     within('#signUp'){fill_in('password', {with: user[:password]})}
#   #     within('#signUp'){fill_in('first_name', {with: user[:first_name]})}
#   #     within('#signUp'){click_button('Submit')}
#   #   end
#   #
#   #   def visitPage
#   #     visit('/')
#   #   end
#   # end
#
#   def appAdmin
#     @appAdmin ||= AppUser.new
#   end
#
#   def testUser
#     @testUser
#   end
#
#   def createTestUser
#     first_name = Faker::Name.first_name
#     @testUser = {
#       first_name: first_name,
#       last_name: Faker::Name.last_name,
#       age: Faker::Number.between(15, 25),
#       email: Faker::Internet.free_email(first_name),
#       password: Faker::Internet.password(8)
#     }
#   end
# end
#
# World(KnowAdmin)
