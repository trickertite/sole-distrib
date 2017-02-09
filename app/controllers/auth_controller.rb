class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def signUp
    render json: {msg: 'hello world'}
  end
end
