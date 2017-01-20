module KnowProduct
  def createProduct(product)
    fill_in('name', {with: product['name']})
    fill_in('price', {with: product['price']})
    select(product['category'], {from: 'category'})
    click_button('Submit')
  end
end

World(KnowProduct)

module KnowAdmin
  class AppAdmin
    def createUserAccount(user)

    end
  end

  def appAdmin
    @appAdmin ||= AppAdmin.new
  end

  def testUser
    first_name = Faker::Name.first_name
    return {
      first_name: first_name,
      last_name: Faker::Name.last_name,
      age: Faker::Number.between(15, 25),
      email: Faker::Internet.free_email(first_name),
      password: Faker::Internet.password(8)
    }
  end
end

World(KnowAdmin)
