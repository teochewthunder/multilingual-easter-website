class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception


    before_action :get_langs

    def get_langs
        if cookies[:lang] == nil
            cookies[:lang] = 
            {
            :value => 'en',
            :expires => 1.year.from_now
            }
        end
    end
end
