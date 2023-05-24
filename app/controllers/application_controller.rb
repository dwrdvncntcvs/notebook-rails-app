class ApplicationController < ActionController::API
  before_action :authorize_request

  include ResponseHelper
  include JwtHelper

  def authorize_request
    authorization = request.headers['Authorization']

    if authorization.nil?
      return render json: error_res('Sign In First'),
                    status: :bad_request
    end

    token = authorization.split(' ').last
    decoded_data = jwt_decode(token)

    @current_user = User.find(decoded_data['user_id'])
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res('Sign In First'),
           status: :bad_request
  end

  def restrict_notebook_access
    authorize_action(@notebook.user_id)
  end

  def restrict_page_access
    authorize_action(@page.notebook.user_id)
  end

  def restrict_note_access
    authorize_action(@note.page.notebook.user_id)
  end

  def restrict_user_access
    authorize_action(@user.id)
  end

  def set_user_by_username
    username = params[:username]
    @user = User.find_by(username:)
    return unless @user.nil?

    render json: error_res('User not found'),
           status: :not_found
  end

  def set_user
    @user = set_model(User, :user_id, 'User not found')
  end

  def set_notebook
    @notebook = set_model(Notebook, :notebook_id, 'Notebook not found')
  end

  def set_page
    @page = set_model(Page, :page_id, 'Page not found')
  end

  def set_note
    @note = set_model(Note, :note_id, 'Note not found')
  end

  private

  def set_model(model, param_key, error_message)
    id = params[param_key]
    model.find(id)
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res(error_message),
           status: :not_found
  end

  def authorize_action(model_id)
    return unless @current_user.id != model_id

    render json: error_res('Access Denied'),
           status: :forbidden
  end
end
