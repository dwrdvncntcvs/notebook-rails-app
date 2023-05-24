class NotesController < ApplicationController
  before_action :set_page, only: %i[index create]
  before_action :set_note, only: %i[update remove]
  before_action :restrict_page_access, only: %i[index create]
  before_action :restrict_note_access, only: %i[update remove]

  def index
    page, limit = pagination

    notes = Note.paginated_data(
      'notes', {
        page:,
        limit:,
        where: { page_id: params[:page_id] }
      }
    )

    is_page_exceeded(notes)

    render json: success_res(notes, 'All page notes'),
           status: :ok
  rescue StandardError => e
    render json: error_res(e),
           status: :bad_request
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

  def remove
    if @note.destroy
      render json: success_res(nil, 'Note deleted successfully'),
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
