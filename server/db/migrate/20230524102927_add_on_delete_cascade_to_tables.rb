class AddOnDeleteCascadeToTables < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :notebooks, :users
    remove_foreign_key :pages, :notebooks
    remove_foreign_key :notes, :pages

    add_foreign_key :notebooks, :users, on_delete: :cascade
    add_foreign_key :pages, :notebooks, on_delete: :cascade
    add_foreign_key :notes, :pages, on_delete: :cascade
  end
end
