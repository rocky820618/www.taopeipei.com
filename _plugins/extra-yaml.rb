=begin rdoc
module Jekyll
    class ExtraYAML < Converter
        safe true

        priority :low

        def matches(ext)
            ext =~ /.*/i
        end 

        def output_ext(ext)
            ".html"
        end

        def convert(content)
            content.upcase
        end
    end
end

=end
