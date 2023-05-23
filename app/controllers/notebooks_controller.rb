class NotebooksController < ApplicationController
  include ResponseHelper
  
  def index
    notebooks = Notebook.all

    render json: success_res({ notebooks: }, 'All notebooks'),
           status: :ok
  end
end
