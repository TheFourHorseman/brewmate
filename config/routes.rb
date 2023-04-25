Rails.application.routes.draw do
  devise_for :users
  resources :beers
  resources :likes
  
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get 'home/index'
end
