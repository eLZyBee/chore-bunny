Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["google_key"], ENV["google_secret"]
  provider :facebook, ENV["facebook_key"], ENV["facebook_secret"]
end
