Rails.application.routes.draw do

  #admins devise
  devise_for :admins
#  namespace :admins do
    #admin panel
    get '/admin' => 'admin#home', as: :authenticated_root

  # set the index page / root url
  root 'pages#about'



  devise_scope :admin do
      get '/login' => 'devise/sessions#new'
      #admin controllers
      authenticated :admin do
        resources :work_projects
        resources :tools_skills
        resources :programming_ls
      end
  end
  #admin login


  # for sending emails
  match 'contact/send' => 'application#send_message', via: :post

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
