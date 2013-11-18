# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "jekyll-whatiflocalization"
  s.version = "0.1.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jens Wille", "Arne Eilermann"]
  s.date = "2012-05-24"
  s.description = "Jekyll plugin that adds localization features to the rendering engine."
  s.email = ["jens.wille@uni-koeln.de", "eilermann@lavabit.com"]
  s.extra_rdoc_files = ["README", "COPYING", "ChangeLog"]
  s.files = ["lib/jekyll/whatiflocalization.rb", "lib/jekyll/whatiflocalization/version.rb", "COPYING", "ChangeLog", "Rakefile", "README"]
  s.homepage = "http://github.com/blackwinter/jekyll-localization"
  s.rdoc_options = ["--charset", "UTF-8", "--line-numbers", "--all", "--title", "jekyll-whatiflocalization Application documentation (v0.1.6)", "--main", "README"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.24"
  s.summary = "Jekyll plugin that adds localization features to the rendering engine."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll-rendering>, [">= 0"])
    else
      s.add_dependency(%q<jekyll-rendering>, [">= 0"])
    end
  else
    s.add_dependency(%q<jekyll-rendering>, [">= 0"])
  end
end
