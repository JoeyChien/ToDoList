Rails.application.routes.draw do
  resources :groups
  resources :todolists
  root "groups#index"
end
