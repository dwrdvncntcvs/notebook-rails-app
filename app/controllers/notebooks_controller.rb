class NotebooksController < ApplicationController
  before_action :set_notebook, only: %i[update remove]
  before_action :restrict_notebook_access, only: %i[update remove]

  def index
    page, limit = pagination

    notebooks = Notebook.paginated_data(
      'notebooks',
      {
        page:,
        limit:,
        where: { user: @current_user }
      }
    )

    is_page_exceeded(notebooks)

    render json: success_res(notebooks, 'All notebooks'),
           status: :ok
  rescue StandardError => e
    render json: error_res(e),
           status: :bad_request
  end

  def create
    notebook = Notebook.new notebook_params
    notebook.user = @current_user

    if notebook.save
      render json: success_res({ notebook: }),
             status: :ok
    else
      render json: error_res(notebook.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def update
    if @notebook.update(notebook_params)
      notebook = Notebook.find(params[:notebook_id])
      render json: success_res({ notebook: }, 'Notebook updated successfully'),
             status: :ok
    else
      render json: error_res(notebook.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def remove
    if @notebook.destroy
      render json: success_res(nil, 'Notebook deleted successfully'),
             status: :ok
    else
      render json: error_res(@notebook.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end
