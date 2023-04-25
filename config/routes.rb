Rails.application.routes.draw do
  resources :beers
  resources :likes
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get 'home/index'
end
