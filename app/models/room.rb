class Room < ActiveRecord::Base

  validates :name, :description, presence: true

  has_many :chores, through: :links

end
