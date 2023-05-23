class ApplicationController < ActionController::API
  include ResponseHelper
  include JwtHelper

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

  def set_note
    note_id = params[:note_id]
    @note = Note.find(note_id)
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res('Note not found'),
           status: :not_found
  end
end
