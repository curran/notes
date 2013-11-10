notes
=====

A simple serverless blog engine for viewing a collection of note entries
authored in [Markdown](http://en.wikipedia.org/wiki/Markdown).

This small project was undertaken to learn how to implement single page
apps using [Backbone.js](http://backbonejs.org/).

The main application is in [main.js](blob/gh-pages/js/main.js).

[View the site](http://curran.github.io/notes/)!

##Use

You can use this project to author your own collection of notes. Just clone the
repository and consider the following:

 * You'll need to change `defaultAuthor` at the top of main.js.
 * The `entries` directory contains the entry files, authored in Markdown.
 * The name of each file must conform to an underscore delimited structure of
the form `YYYY_MM_DD_Title_Goes_Here.md`.
 * When a new entry is added, you should run `node buildEntriesList.js`, which
populates `entriesList.json` based on the latest listing of files.

You can publish the content using [GitHub Pages](http://pages.github.com/) by
tracking the files in a Git branch called `gh-pages`.

Enjoy!
Curran Kelleher 11/9/2013
