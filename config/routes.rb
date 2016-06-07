Rails.application.routes.draw do
  root to: "static_pages#root"

  get '/auth/google_oauth2/callback', to: 'api/sessions#oauth'

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :rooms, only: [:index, :create, :show, :update, :destroy] do
      resources :chores, only: [:index]
    end
    resources :bunnies, only: [:index, :create, :update, :show, :destroy]
    resources :chores, only: [:index, :create, :show, :update, :destroy]
    resources :bookings, only: [:index, :show, :destroy, :update, :create]
  end
end
