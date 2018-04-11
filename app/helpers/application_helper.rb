module ApplicationHelper
	def selectedLang(lang)
		"selected" if lang == cookies[:lang]
	end
end
