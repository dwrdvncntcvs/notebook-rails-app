class AuthController < ApplicationController
  before_action :check_user_creds, only: %i[sign_in]

  def sign_in
    if @user && @user.authenticate(params[:password])
      token = jwt_encode({ user_id: @user.id })
      render json: success_res({ token: }, 'Signed in successfully'),
             status: :ok
    else
      render json: error_res('Invalid Username or Password'),
             status: :bad_request
    end
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

  def check_user_creds
    @user = User.find_by(username: params[:username])

    return unless @user.nil?

    render json: error_res('User not found'),
           status: :not_found
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :salt, :encrypted_password)
  end
end
