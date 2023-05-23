class NotebooksController < ApplicationController
  include ResponseHelper

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

  private

  def notebook_params
    params.require(:notebook).permit(:name)
  end
end
