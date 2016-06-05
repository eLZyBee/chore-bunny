class Room < ActiveRecord::Base

  validates :name, :description, presence: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "bunny.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :links
  has_many :chores, through: :links

end
