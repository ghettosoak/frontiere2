# Frontiere v2

Buildsystem unashamedly taken from here: https://github.com/maxomedia/mxm-gulp

Let's rock

1. CD into the _gulp directory
2. run npm install
3. get a coffee, there's a lot to download
4. it'll probably throw an error, ignore and run npm install again
5. done? run gulp
6. boogie

Includes:

- Most of bootstrap, because bower is for suckers
- A handy dandy JS lib with functions I find myself using a lot
- More empty folders than you can shake a stick at
- A folder full(-ish) of useful commonly seen HTML structures (&& their applicable JS / CSS)
 - folder is called '_structures'
 - Said HTML / JS is commented out
 - Please feel free to delete / use as you please

Good to know:

- '$$_' is the prefix to access the tasty core functions from whereever you are.
- Define your the height of your sticky header in the window.scrollToHere function within core.js
- window.mediaQueriesSupported requires a CSS one liner, can be found in skeleton.less
- if you need to calculate your media query AFTER something is setup (eg, flexslider, etc), simply subscribe window.mediaQuery's initial calculate call to the pageSetup function

Known issues:
- Sometimes gulp needs to be restarted to accept SVG files

