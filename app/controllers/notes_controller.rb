class NotesController < ApplicationController
  before_action :set_page, only: %i[index create]
  before_action :set_note, only: %i[update]

  def index
    notes = Note.where(page_id: params[:page_id])

    render json: success_res({ notes: }, 'All page notes'),
           status: :ok
  end

  def create
    note = Note.new note_params
    note.page = @page

    if note.save
      render json: success_res({ note: }, 'Note created successfully'),
             status: :ok
    else
      render json: error_res(note.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      note = Note.find(params[:note_id])
      render json: success_res({ note: }, 'Note updated successfully'),
             status: :ok
    else
      render json: error_res(@note.errors.full_messages),
             status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:content)
  end
end
