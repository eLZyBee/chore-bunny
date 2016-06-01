class Bunny < ActiveRecord::Base

  validates :user_id, presence: true

  belongs_to :user

  has_many(
    :bookings,
    class_name: "Booking",
    foreign_key: :bunny_id
  )

end
