class AuthController < ApplicationController
  def sign_in
  
  end

  def sign_up
    user = User.new(user_params)

    if user.save
      render json: success_res({ user: }, 'User created successfully'),
             status: :ok
    else
      render json: error_res(user.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :salt, :encrypted_password)
  end
end
