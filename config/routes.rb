Rails.application.routes.draw do

  resources :work_projects
  resources :tools_skills
  resources :programming_ls
  # set the index page / root url
  root 'pages#home'

  get '/about' => 'pages#about'

  get '/work' => 'pages#work'

  #get 'pages/about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
