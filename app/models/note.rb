class Note < ApplicationRecord
  belongs_to :page

  validates :content, presence: true
end
