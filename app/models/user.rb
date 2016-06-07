class User < ActiveRecord::Base

  attr_reader :password

  validates :name, :email, :session_token, presence: true
  validates_format_of :email, with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  # Paperclip configuration
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "bunny.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many(
    :bookings,
    class_name: "Booking",
    foreign_key: :parent_id,
    primary_key: :id
  )

  has_many(
    :appointments,
    class_name: "Booking",
    foreign_key: :bunny_id,
    primary_key: :id
  )

  def upcoming_appointments
    # ActiveRecord search to filter active appointments not yet complete.
  end

  def upcoming_bookings
    # ActiveRecord search to filter active bookings not yet complete.
  end

	def password=(password)
    @password = password
		self.password_digest = BCrypt::Password.create(password)
	end

  def self.find_or_create_from_auth_hash(auth_hash)
    user = User.find_by(google_uid: auth_hash[:uid])

    if user.nil?
      user = User.create!(
        google_uid: auth_hash[:uid],
        name: auth_hash[:info][:name],
        email: auth_hash[:info][:email],
        password_digest: 'not_being_used'
      )
    end

    user
  end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = generate_session_token
		ensure_session_token_uniqueness
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= generate_session_token
	end

	def generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = generate_session_token
		end
	end

end
