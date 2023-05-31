class UsersController < ApplicationController
  before_action :set_user_by_username, only: %i[show]
  before_action :set_user, only: %i[update remove]
  before_action :restrict_user_access, only: %i[update remove]

  def show
    render json: success_res({ user: @user.as_json }, "#{@user.complete_name} account details")
  end

  def update
    if @user.update(user_params)
      render json: success_res({ user: @user.as_json }, 'User account updated successfully'),
             status: :ok
    else
      render json: error_res(@user.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def remove
    if @user.destroy
      render json: success_res(nil, 'User account deleted successfully'),
             status: :ok
    else
      render json: error_res(@user.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :salt, :encrypted_password)
  end
end
