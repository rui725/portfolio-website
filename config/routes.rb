Rails.application.routes.draw do

  # set the index page / root url
  root 'pages#home'

  get '/about' => 'pages#about'
 

  #get 'pages/about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
