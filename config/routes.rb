Rails.application.routes.draw do
  get  "notebooks", to: "notebooks#index"
  post "notebooks", to: "notebooks#create"
end
