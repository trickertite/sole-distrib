Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post 'auth/signUp'

  resource :users, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'site#index'
  resources :products, only: [:index, :new, :create]
end
