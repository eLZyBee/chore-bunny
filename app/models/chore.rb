class Chore < ActiveRecord::Base

  validates :name, presence: true

  has_many :rooms, through: :links

end
