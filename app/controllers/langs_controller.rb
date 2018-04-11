class LangsController < ApplicationController
  	def index
		if Lang.allowedVals["languages"].include? params[:lang]
		   	cookies[:lang] = {
		       :value => params[:lang],
		       :expires => 1.year.from_now
		    }
		else
		   	cookies[:lang] = {
		       :value => 'en',
		       :expires => 1.year.from_now
		    }		
		end
  	end
end