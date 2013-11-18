require 'jekyll/whatiflocalization'

# The language codes that will be considered for translation
Jekyll::WhatIfLocalization::LANGUAGES = %w[en es ru zh pt fr de it jp]

# The language codes mapped to their human names
Jekyll::WhatIfLocalization::HUMAN_LANGUAGES = {
  'en' => %w[English Anglais],
  'es' => %w[Spanish Español],
  'ru' => %w[Russian Russian],
  'zh' => %w[Chinese Chinese],
  'pt' => %w[Portugese Portugese],
  'fr' => %w[French Français],
  'de' => %w[German German],
  'it' => %w[Italian Italian],
  'jp' => %w[Japanese 中文]
}

