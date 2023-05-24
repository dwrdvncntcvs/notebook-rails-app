Rails.application.routes.draw do
  # Auth Routes
  post 'auth/sign-in', to: 'auth#sign_in'
  post 'auth/sign-up', to: 'auth#sign_up'

  # User Routes
  get 'users/:username', to: 'users#show'
  put 'users/:user_id', to: 'users#update'
  delete 'users/:user_id', to: 'users#remove'

  # Notebook Routes
  get  'notebooks', to: 'notebooks#index'
  post 'notebooks', to: 'notebooks#create'
  put 'notebooks/:notebook_id', to: 'notebooks#update'
  delete 'notebooks/:notebook_id', to: 'notebooks#remove'

  # Page Routes
  get 'pages/:notebook_id', to: 'pages#index'
  post 'pages/:notebook_id', to: 'pages#create'
  put 'pages/:page_id', to: 'pages#update'
  delete 'pages/:page_id', to: 'pages#remove'

  # Note Routes
  get 'notes/:page_id', to: 'notes#index'
  post 'notes/:page_id', to: 'notes#create'
  put 'notes/:note_id', to: 'notes#update'
  delete 'notes/:note_id', to: 'notes#remove'
end
