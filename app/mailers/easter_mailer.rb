class EasterMailer < ApplicationMailer
	default from: 'easter@example.com'
	 
	def easter_email(name,email)
	    mail(to: "teochewthunder@gmail.com", subject: name + " has requested to know more about Easter!") do |format|
  			format.html {
    		render locals: { name: name, email: email }
  			}
  			format.text {
    		render locals: { name: name, email: email }
  			}
		end
	end	
end