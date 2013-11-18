Jekyll Environment Setup
========================

Requirements
------------
- Ruby 1.8.7
- CommonJS Gem at v0.2.0

Step-by-step walkthrough for OSX:
------------------------------

1. Update your OSX Rubygems by running `sudo gem update --system` .
2. Install the required Ruby gems using the command line:
    - `sudo gem install less`
    - `sudo gem install jekyll`
    - `sudo gem install jekyll-less`
3. Navigate to "{project folder}/_gem-src/jekyll-whatiflocalization/" and run the following commands:
   - `sudo gem build jekyll-whatiflocalization.gemspec`
   - `sudo gem install jekyll-whatiflocalization`
4. Done!

Not-Quote-Step-By-Step walkthrough for OSX with homebrew
--------------------------------------------------------

Making ruby play well with SnowLion and homebrew is slightly more painful.  This is what I found works well:

1. get rvm (ruby version manager)
2. Make sure you have xcode or the commandline tools installed. 
3. in your shell run: rvm requirements.. follow the instructions. (copied below for clarity)
    - brew install libksba
    - get the proper version of apple-gcc apple-gcc42
      - `brew update`
      - `brew tap homebrew/dupes`
      - `brew install autoconf automake apple-gcc42`
      - `rvm pkg install openssl`
    - rvm install 1.9.3 (I couldn't get 1.8.7 to work) 
5. Download all the required gems. Note, if you're using rvm, you don't have to sudo.  Also I found the following gems were required:
    - `gem install less`
    - `gem install jekyll`
    - `gem install jekyll-less`
    - `gem install libv8` 
    - `gem install therubyracer`

References:
------------

- [less](http://rubygems.org/gems/less)
- [jekyll](https://github.com/mojombo/jekyll/wiki/install)
- [jekyll-localization](https://github.com/blackwinter/jekyll-localization)
- [jekyll-less](https://github.com/zroger/jekyll-less)
- [Less CSS documentation](http://lesscss.org/)
- [Updating Ruby](http://pragmaticstudio.com/blog/2010/9/23/install-rails-ruby-mac)




What is Jekyll?

Jekyll is a parsing engine bundled as a ruby gem used to build static websites from dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as “a simple, blog aware, static site generator”.

What does Jekyll Do?

Jekyll is a ruby gem you install on your local system. Once there you can call jekyll --server on a directory and provided that directory is setup in a way jekyll expects, it will do magic stuff like parse markdown/textile files, compute categories, tags, permalinks, and construct your pages from layout templates and partials.

Once parsed, Jekyll stores the result in a self-contained static _site folder. The intention here is that you can serve all contents in this folder statically from a plain static web-server.

You can think of Jekyll as a normalish dynamic blog but rather than parsing content, templates, and tags on each request, Jekyll does this once beforehand and caches the entire website in a folder for serving statically.


You can checkout the jekyll-template we are using on BNS projects here.

https://git.criticalmass.com/git/jekyll-template.git

If you have anything you would like to add, please feel free to do so.  This will be a work in progress and since we just started with Jekyll, I'm sure there is much more we can add.

Thanks.

