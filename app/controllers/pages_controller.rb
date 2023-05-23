class PagesController < ApplicationController
  before_action :set_notebook, only: %i[index]

  def index
    pages = Page.where(notebook_id: params[:notebook_id])

    render json: success_res({ pages: }, 'All notebook pages'),
           status: :ok
  end
end
