class PagesController < ApplicationController
  before_action :set_notebook, only: %i[index create]
  before_action :set_page, only: %i[update]

  def index
    pages = Page.where(notebook_id: params[:notebook_id])

    render json: success_res({ pages: }, 'All notebook pages'),
           status: :ok
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

  private

  def page_params
    params.require(:page).permit(:name)
  end
end
