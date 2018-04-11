class Lang 
    #include ActiveModel::Model

    def self.allowedVals
    {
        "languages" => Hash["en" => "English", "cn" => "中文"]
    }
    end
end