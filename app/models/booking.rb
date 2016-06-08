class Booking < ActiveRecord::Base

  validates :date, :details, :bunny_id, :parent_id, :chore_id, :room_id, presence: true

  belongs_to(
    :parent,
    class_name: "User",
    foreign_key: :parent_id
  )
  belongs_to :bunny
  belongs_to :chore
  belongs_to :room

  has_one :review

end
