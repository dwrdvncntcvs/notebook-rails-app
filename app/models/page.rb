class Page < ApplicationRecord
  NAME_LENGTH_LIMIT = 50

  belongs_to :notebook

  validates :name, presence: true, length: { maximum: NAME_LENGTH_LIMIT }
end
