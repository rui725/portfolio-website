class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    :authenticated_root
  end

  def after_sign_out_path_for(resource)
    '/login'
  end

  def send_message
    name = params["name"]
    email = params["email"]
    msg = params["msg"]
    if !params["name"].empty? && !params["email"].empty? && !params["msg"].empty? then
      email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      result = email =~ email_reg
      if result
        GMailer.send_m(email,name,msg).deliver!
        render json:{state:"Success", message: "Message sent"}
      else
         render json:{state:"Error", message:"Wrong Email Address" + result.to_s, data:"data"}
      end
    else
      render json:{state:"Error", message:"Missing values for either Name, Email, and Message", data:"data"}
    end
  end



end
