class User < ActiveRecord::Base

  attr_reader :password

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

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
