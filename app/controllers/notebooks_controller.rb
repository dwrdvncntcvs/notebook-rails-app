class NotebooksController < ApplicationController
  include ResponseHelper

  before_action :set_notebook, only: %i[update remove]

  def index
    notebooks = Notebook.all

    render json: success_res({ notebooks: }, 'All notebooks'),
           status: :ok
  end

  def create
    notebook = Notebook.new notebook_params

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

  def set_notebook
    notebook_id = params[:notebook_id]
    @notebook = Notebook.find(notebook_id)
  rescue ActiveRecord::RecordNotFound => e
    render json: error_res('Notebook not found'),
           status: :not_found
  end

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end
