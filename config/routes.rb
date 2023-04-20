Rails.application.routes.draw do
  resources :beers
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get 'home/index'
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
