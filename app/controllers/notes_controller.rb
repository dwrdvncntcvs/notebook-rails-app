class NotesController < ApplicationController
  before_action :set_page, only: %i[index]

  def index
    notes = Note.where(page_id: params[:page_id])

    render json: success_res({ notes: }, 'All page notes'),
           status: :ok
  end
end
