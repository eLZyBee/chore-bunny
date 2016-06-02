Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :rooms, only: [:index, :create, :show, :update, :destroy]
    resources :bunnies, only: [:create, :update, :show] 
    resources :chores, only: [:index, :create, :show, :update, :destroy]
    resources :bookings, only: [:index, :show, :destroy, :update, :create]
  end
end
