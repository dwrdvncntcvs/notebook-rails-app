Rails.application.routes.draw do
  get  'notebooks', to: 'notebooks#index'
  post 'notebooks', to: 'notebooks#create'
  put 'notebooks/:notebook_id', to: 'notebooks#update'
  delete 'notebooks/:notebook_id', to: 'notebooks#remove'
end
