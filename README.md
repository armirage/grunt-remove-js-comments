<!-- armirage .github README.md -->

[:earth_americas: :speech_balloon: English](https://github.com/armirage/grunt-remove-js-comments/blob/master/docs/l10n/index.md)\
[Table of Contents](#table-of-contents)

<!-- Armirage OSS Header -->
<div align="right">
	<a href="https://armirage.github.io" target="_blank" rel="noopener">
		<img src="https://armirage.github.io/images/banners/armirage-oss-header.webp" alt="Armirage OSS Header. The Armirage logo; A person icon wrapped in a leaf forming an 'A'. Armirage name and a tilted rubber stamp of approval with the letters 'OSS' cover the rightmost corner." width="160px">
	</a>
</div>

<!-- Banner -->
<div align="center" id="anchor-1">
	<img src="https://raw.githubusercontent.com/armirage/grunt-remove-js-comments/master/docs/images/grunt-remove-js-comments-banner.webp" alt="A wall is covered in notes. Different size sticky notes litter its surface. Hand written notes written on paper ripped from spiral bond notebooks are pinned to the surface. Some pages are torn from glue bond notepads and thumb tacked up. Some sticky notes are heart shaped. The messages are haphazardly placed deeply layered atop each other. They Contain messages such as, 'see you again', reminders of upcoming events, messages of encouragement. The notes overwhelm the wall, its surface completely covered and unknowable." width="100%">
	<div align="right">
		<small>"Sticky Note Lot" by Min An, licensed under Pexels.</small>
		<sup>
			<a href="#banner-note">[1]</a>
		</sup>
	</div>
</div>

&nbsp;

<!-- Content -->
<!-- Workaround to display <h1> correctly in NPM lest it duplicate rendering. -->
<!-- omit in toc -->

# <sup><em>@armirage/</em></sup>grunt-remove-js-comments&nbsp;&nbsp;<a href="https://www.npmjs.com/package/@armirage/grunt-remove-js-comments" alt="npm package link" target="_blank"><img src="https://armirage.github.io/images/external-companies/npm/npm-logo/classic/npm-2009.svg" alt="npm logo" width="64"></a>&nbsp;&nbsp;<a href="https://github.com/armirage/grunt-remove-js-comments" alt="github repo link" target="_blank"><img src="https://armirage.github.io/images/external-companies/github/github-mark/GitHub-Mark-64px.png" alt="github logo" width="32"></a>

[![GitHub tag (latest by date)](https://img.shields.io/github/v/release/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/releases)
[![GitHub issues](https://img.shields.io/github/issues/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/issues/)
[![Github code size](https://img.shields.io/github/languages/code-size/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/releases)
[![GitHub license](https://img.shields.io/github/license/armirage/grunt-remove-js-comments)](https://github.com/armirage/grunt-remove-js-comments/blob/master/LICENSE.md)
[![armirage-style](https://img.shields.io/badge/code%20style-armirage-brightgreen)](https://github.com/armirage/grunt-remove-js-comments)
[![liberapay-patrons](https://img.shields.io/liberapay/patrons/armirage.svg?logo=liberapay)](https://www.liberapay.com/armirage)

> Choose between JSDocs, Multiline, Single line, Header lines, Comment Anchors, Marked comments, HTML type comments, or remove according to a RegEx pattern. This plugin offers that kind of delineated selection.

&nbsp;

<div align="center">
	<img src="https://raw.githubusercontent.com/armirage/grunt-remove-js-comments/master/docs/images/example-removal.gif" alt="Screen recording showing inconsistent code being linted into the Armirage style." width="730px">
</div>

<!-- omit in toc -->

## Table of Contents

- [About](#about)
- [Install](#install)
  - [Requires](#requires)
- [Usage](#usage)
- [Options](#options)
  - [removeJSDocs](#removejsdocs)
  - [removeMultilines](#removemultilines)
  - [removeAnchors](#removeanchors)
  - [removeSpecials](#removespecials)
  - [removeHeaderLines](#removeheaderlines)
  - [removeDoubleSlashes](#removedoubleslashes)
  - [removeHTMLStyle](#removehtmlstyle)
  - [removeRegex](#removeregex)
- [How to Contribute](#how-to-contribute)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [Release History](#release-history)
- [Footnotes](#footnotes)

## About

Grunt <sup id="anchor-2">[2](#grunt-note)</sup> is a JavaScript task runner. It makes it easy to automate procedures. They have different plugins for different tasks. If a plugin does not exist, it is easy and quick to build a custom one.

If you are new to using Grunt, check out their ["Getting Started"](http://gruntjs.com/getting-started) guide. It explains in detail how to install Grunt, use plugins, and create a `Gruntfile.js`.

This plugin allows you to select which comments (by syntax) to remove and which ones to leave untouched. If the list of options lack your specific case you can use a Regular Expression (RegEx) to match the code you want removed. (A very powerful overload feature.)

## Install

### Requires

- ✅ [Grunt](https://gruntjs.com)

To install Grunt and this plugin, run the following commands in the terminal:

```console
npm install grunt @armirage/grunt-remove-js-comments --save-dev
```

- :pencil: NOTE: The plugin is a scoped npm package and will need to be referenced that way.

This will save both as developer dependencies. Most likely this is for development and unnecessary in production builds.

While in the terminal, create the configuration file `Gruntfile.js`

```console
touch Gruntfile.js
```

- :pencil: NOTE: The capital "G".

To complete installation See [Usage](#usage).

## Usage

Once the grunt-remove-js-comments package is installed, you can configure the tasks to run in `Gruntfile.js`.

// Gruntfile.js

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    "remove-js-comments": {
      dev: {
        options: {
          removeJSDocs: true,
          removeMultilines: true,
          removeAnchors: true,
          removeSpecials: false,
          removeHeaderLines: true,
          removeDoubleSlashes: true,
          removeHTMLStyle: true,
          removeRegex: "",
        },
        src: "index.js",
        dest: "output.js",
        expand: false,
      },
    },

    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.loadNpmTasks("@armirage/grunt-remove-js-comments");

  grunt.registerTask("default", ["remove-js-comments"]);
};
```

- :pencil: NOTE: The plugin is a scoped npm package and will need to be referenced that way.

## Options

For information on passing options in a `Gruntfile.js` refer to [Grunt's documentation: "Configuring Tasks"](https://gruntjs.com/configuring-tasks).

_\* Any Option not listed in the Gruntfile.js will use its default value._

### removeJSDocs

Type: `Boolean`
Default value: `false`

> JSDoc <sup id="anchor-3">[3](#jsdocs-note)</sup> is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor.
>
> You add documentation comments directly to your source code, right alongside the code itself. The JSDoc tool will scan your source code and generate an HTML documentation website for you.
>
> To learn more about JSDoc API Generation, visit the [JSDoc Website](https://jsdoc.app/about-getting-started.html).

To remove JSDocs comments, matching the following format, set to `true`.

```javascript
/** inline JSDoc comment */

/**
 * @comment stuff be here
 */
```

### removeMultilines

Type: `Boolean`
Default value: `false`

To remove multiline comments, matching the following format, set to `true`.

```javascript
/* inline comment using multiline syntax */

/*
 comments in here
 */
```

- :pencil: NOTE: Set to `true` does not remove JSDocs, even though they are a type of multiline comment.

### removeAnchors

Type: `Boolean`
Default value: `false`

> Comment Anchors <sup id="anchor-4">[4](#comment-anchors-note)</sup> is a VS Code <sup id="anchor-5">[5](#vs-code-note)</sup> extension.
>
> Visually impaired programmers may have a challenge navigating the code base. Techniques such as indentation, line breaks, color coding of language keywords (such as IF-THEN), are all visual cues programmers use to scan and navigate to blocks of code. Signals that often are not communicated through assistive devices.
>
> Comment Anchors scans and treats certain comments as hyperlinks in the code. Providing a textual navigation menu with links to code blocks.
>
> To get Comment Anchors, download [Comment Anchors from Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)

To remove Comment Anchors comments, matching the following format, set to `true`.

```javascript
// ANCHOR link here

// FIXME A pesky bug.

// TODO One more thing etc..
```

### removeSpecials

Type: `Boolean`
Default value: `false`

To remove special comments, matching the following format, set to `true`.

```javascript
/*! Author: Nathaniel Hawthorne !*\

/*# Let's not lose this.
```

- :pencil: NOTE: Many libraries put attribution info in these types comments. If you do not completely own all of the code, consider leaving this option default for attribution and copyright purposes.

### removeHeaderLines

Type: `Boolean`
Default value: `false`

To remove header line comments, matching the following format, set to `true`.

```javascript
//---------

//=========

//-+-+-+-+-+
```

### removeDoubleSlashes

Type: `Boolean`
Default value: `false`

To remove double slash comments, matching the following format, set to `true`.

```javascript
// only one line, can not go any further.
```

- :pencil: NOTE: Set to `true` does not remove Comment Anchors, specials, or header lines, even though they are a type of single line, double slash comment.

### removeHTMLStyle

Type: `Boolean`
Default value: `false`

> While grunt-remove-js-comments is intended towards and tested against JavaScript
> files. I have found it safe to use for my whole project. I use it on HTML, CSS,
> XML, and other file types. The removals are CSS url safe.

To remove HTML comments, matching the following format, set to `true`.

```html
<!-- comment be in here -->
```

### removeRegex

Type: `string`
Default value: ""

> "Regex" colloquially refers to RegExp or Regular Expressions. A regular expression is an object that describes a pattern of characters.
>
> Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.
>
> To learn more about JavaScript Regular Expression, refer to the [W3C Schools website](https://www.w3schools.com/jsref/jsref_obj_regexp.asp).

To remove code matching a Regular Expression, set this option to a "regex" string.

Example "Setting the removeRegex Option":
// Gruntfile.js excerpt

```javascript
...
options: {
	removeRegex: "/^[\t\s]*(\/\/)\s*T\d{2}:\d{2}:\d{2}Z/gm"
}
...
```

Would remove all lines matching that pattern, such as the example below:

```javascript
// 2015-12-22T17:44:24Z
```

- :warning: WARNING: This will remove anything matching the expression. It is not limited to comment lines.

## How to Contribute

Review the [Contributing Guidelines](https://github.com/armirage/.github/blob/master/CONTRIBUTING.md) for ways to make this repository better.

Open Source Software (OSS) is only as strong as our Community.

<a href="https://liberapay.com/armirage/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a> &nbsp; Thank you!

## Acknowledgements

Grunt is easy and extensible. Integrates well into production Continuos Integration (CI) processes. Cheers to them!

Inspired by [echoloyuk](https://github.com/echoloyuk)'s original code for grunt-remove-comments.

Thank you to [BeatrizHerculano](https://github.com/BeatrizHerculano) ![BeatrizHerculano](https://avatars1.githubusercontent.com/u/15809077?s=50) for translating this [README into Portuguese.](https://github.com/armirage/grunt-remove-js-comments/blob/master/docs/l10n/README.pt.md)

## Contact

Armirage Github repositories and @armirage scoped NPM modules are maintained by [Armirage](https://www.armirage.com), A Technology Solutions company, feel free to <a href="mailto:helloyall@armirage.com">contact us</a>!

## Release History

- 2020-09-30 Breaking change reversed Logic to explicitly remove things. Update to Armirage style.
- 2020-09-18 Breaking change JSdocs to JSDoc, and added Regex Expressions.
- 2020-09-16 Begin

## Footnotes

<b id="banner-note">[1]:</b> ["Sticky Note Lot"](https://www.pexels.com/photo/sticky-note-lot-1629212/) by [Min An](https://www.pexels.com/@minan1398), licensed under [Pexels](https://www.pexels.com/license/) [:arrow_heading_up:](#anchor-1)

<b id="grunt-note">[2]:</b> Grunt: The JavaScript Task Runner <https://gruntjs.com/> [accessed 30 September 2020] [:arrow_heading_up:](#anchor-2)

<b id="jsdocs-note">[3]:</b> @Use JSDoc <https://jsdoc.app/index.html/> [accessed 30 September 2020] [:arrow_heading_up:](#anchor-3)

<b id="comment-anchors-note">[4]:</b> Comment Anchors - Exodius Studios <https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors/> [accessed 30 September 2020] [:arrow_heading_up:](#anchor-4)

<b id="vs-code-note">[5]:</b> Visual Studio Code <https://code.visualstudio.com/> [accessed 30 September 2020] [:arrow_heading_up:](#anchor-5)

&nbsp;

&nbsp;

<div align="right">
  <p>Armirage logos Copyright © 2020, Clinton Mulligan. All rights reserved.</p>
</div>
</https:>
