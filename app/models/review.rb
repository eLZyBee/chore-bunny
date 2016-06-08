class Review < ActiveRecord::Base

  validates :booking_id, presence: true

  belongs_to :booking

  has_one :bunny, through: :booking

  has_one :parent, through: :booking


end
