# HYTaekwondo web site

Built on [jekyll](https://jekyllrb.com/) and [Github pages](https://pages.github.com/). If you plan on making some changes, it might be a good idea to browse the linked documentation.

## Updating

Whatever you push to `master`, will be automatically deployed. 

## Building the site locally

You'll need ruby and bundler to run jekyll locally, if you're on Linux/UNIX or Mac, chances are you already have it. To build the site,

1. Clone this repository (ask for access from joel.lehikoinen@hytaekwondo.com if necessary).
2. `bundle install`
3. `bundle exec jekyll serve`

After this, the website is accessible at http://localhost:4000. For mobile testing, it might be better to bind jekyll to `0.0.0.0`, so you can access the website with any devices on the same WiFi as the computer serving the website. To accomplish this, replace the last command with

`bundle exec jekyll serve -o 0.0.0.0`

## TODO

- Documents: a page with necessary documents, such as the theory handout, competition rules, pattern docs.
- Embed club's insta feed somewhere (I think this requires a third-party tool).
