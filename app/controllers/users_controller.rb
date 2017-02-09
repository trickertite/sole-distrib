class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    render json: @user
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :email, :password)
    end
end
