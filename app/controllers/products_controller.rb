class ProductsController < ApplicationController
  def new
  end

  def create
    @product = Product.create(product_params)
    render json: {msg: t('product.successfully_created')}
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :category)
  end
end
