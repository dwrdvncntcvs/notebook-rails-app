class AddUserReferenceToNotebook < ActiveRecord::Migration[7.0]
  def change
    add_reference :notebooks, :user, null: false, foreign_key: true
  end
end
