class ProductsController < ApplicationController
  before_action :authenticate_user, only: [:index]

  def index
    @products = Product.all
    render json: @products
  end

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
