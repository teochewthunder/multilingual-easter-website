class SendmailController < ApplicationController
  	def index
  		@email = params[:txtEmail]
  		@name = params[:txtName]
  		EasterMailer.easter_email(@name, @email).deliver
  	end
end