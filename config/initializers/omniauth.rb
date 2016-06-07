Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["google_key"], ENV["google_secret"]
end
