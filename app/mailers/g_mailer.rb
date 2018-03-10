class GMailer < ActionMailer::Base
  default from: 'devlearn2018@gmail.com'
  layout 'mailer'

  def send_m(email,name,msg)
    mail(to: 'shockerds@gmail.com', subject:"From "+name, body: "\n Email: " + email + "\n Message: "+msg)
  end
end
