class Notebook < ApplicationRecord
  NAME_LENGTH_LIMIT = 50

  validates :name, presence: true, length: { maximum: NAME_LENGTH_LIMIT }
end
