class Note < ApplicationRecord
  extend Pagination

  belongs_to :page

  validates :content, presence: true
end
