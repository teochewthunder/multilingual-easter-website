Rails.application.routes.draw do
	get "about/" => "about#index"
	get "langs/index" => "langs#index"
	get "langs/index/:lang" => "langs#index"
	post "sendmail/" => "sendmail#index"

	root "about#index"
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
