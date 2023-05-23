class Notebook < ApplicationRecord
  NAME_LENGTH_LIMIT = 50

  belongs_to :user
  has_many :pages, dependent: :delete_all

  validates :name, presence: true, length: { maximum: NAME_LENGTH_LIMIT }
end
