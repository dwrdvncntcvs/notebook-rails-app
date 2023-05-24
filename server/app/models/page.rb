class Page < ApplicationRecord
  extend Pagination

  NAME_LENGTH_LIMIT = 50

  belongs_to :notebook
  has_many :notes, dependent: :delete_all

  validates :name, presence: true, length: { maximum: NAME_LENGTH_LIMIT }
end
