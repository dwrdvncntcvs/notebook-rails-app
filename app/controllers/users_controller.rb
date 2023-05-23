class UsersController < ApplicationController
  before_action :set_user_by_username, only: %i[show]

  def show
    render json: success_res({ user: @user.as_json }, "#{@user.complete_name} account details")
  end
end
