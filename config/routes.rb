Rails.application.routes.draw do
  # Notebook Routes
  get  'notebooks', to: 'notebooks#index'
  post 'notebooks', to: 'notebooks#create'
  put 'notebooks/:notebook_id', to: 'notebooks#update'
  delete 'notebooks/:notebook_id', to: 'notebooks#remove'

  # Page Routes
  get 'pages/:notebook_id', to: 'pages#index'
  post 'pages/:notebook_id', to: 'pages#create'
  put 'pages/:page_id', to: 'pages#update'
end
