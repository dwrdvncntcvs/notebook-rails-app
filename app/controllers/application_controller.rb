class ApplicationController < ActionController::API
  include ResponseHelper

  def set_notebook
    notebook_id = params[:notebook_id]
    @notebook = Notebook.find(notebook_id)
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res('Notebook not found'),
           status: :not_found
  end

  def set_page
    page_id = params[:page_id]
    @page = Page.find(page_id)
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res('Page not found'),
           status: :not_found
  end
end
