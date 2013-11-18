module Jekyll
  module Modulus
    def mod(data, param)
      data % param
    end  
  end
end

Liquid::Template.register_filter(Jekyll::Modulus)


