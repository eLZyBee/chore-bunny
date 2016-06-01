class Link < ActiveRecord::Base

  validates :chore_id, :room_id, presence: true

  belongs_to :room
  belongs_to :chore
end
