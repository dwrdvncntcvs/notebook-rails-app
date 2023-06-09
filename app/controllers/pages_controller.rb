class PagesController < ApplicationController
  before_action :set_notebook, only: %i[index create]
  before_action :set_page, only: %i[update remove]
  before_action :restrict_notebook_access, only: %i[index create]
  before_action :restrict_page_access, only: %i[update remove]

  def index
    page, limit = pagination

    puts page, limit

    pages = Page.paginated_data(
      'pages', {
        page:,
        limit:,
        where: { notebook_id: params[:notebook_id] }
      }
    )

    is_page_exceeded(pages)

    render json: success_res(pages, 'All notebook pages'),
           status: :ok
  rescue StandardError => e
    render json: error_res(e),
           status: :bad_request
  end

  def create
    page = Page.new(page_params)
    page.notebook = @notebook

    if page.save
      render json: success_res({ page: }, 'Page successfully created'),
             status: :ok
    else
      render json: error_res(@notebook.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def update
    if @page.update(page_params)
      page = Page.find(params[:page_id])
      render json: success_res({ page: }, 'Page updated successfully'),
             status: :ok
    else
      render json: error_res(@page.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def remove
    if @page.destroy
      render json: success_res(nil, 'Page deleted successfuly'),
             status: :ok
    else
      render json: error_res(@page.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  private

  def page_params
    params.require(:page).permit(:name)
  end
end
