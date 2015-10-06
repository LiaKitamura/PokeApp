Rails.application.routes.draw do
  get 'home/index'

  devise_for :users
  root to: "home#index"
  
  resources :teams do
    resources :pokemons
  end
end
