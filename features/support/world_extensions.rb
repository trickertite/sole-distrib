module KnowProduct
  def createProduct(product)
    fill_in('name', {with: product['name']})
    fill_in('price', {with: product['price']})
    select(product['category'], {from: 'category'})
    click_button('Submit')
  end
end

World(KnowProduct)
