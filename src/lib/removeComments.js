/*!
  version: 1.0.0
  author: Clinton Mulligan
  license: BSD 3-Clause License
  Copyright (c) 2020, Clinton Mulligan. All rights reserved.
  https://github.com/armirage/eslint-config-armirage/blob/master/LICENSE.md
!*/

module.exports = function (contents, options) {

const regexJSDocs = /^[\t\s]*\/\*\*[^!#*][\s\S]*?\*\/[\r\n]?/gm
const regexMultilines = /^[\t\s]*\/\*[^!#*][\s\S]*?\*\/[\r\n]?/gm
const regexAnchors = /^[\t\s]*(\/\/)\s*!*[A-Z][^a-z\s][^\n\r]*[\n\r]/gm
const regexSpecials = /^[\t\s]*\/\*(!|#)\*?[^!][\s\S]*?\*\/[\r\n]/gm
const regexDoubleSlashes = /^[\t\s]*(\/\/)\s*[A-Za-z\"\}][^A-Z][^\n\r]*[\n\r]*/gm
const regexHeaderLines = /^[\t\s]*(\/\/)[-+=]+/gm
const regexHTMLStyle = /^[\t\s]*(\<!)[-A-Za-z\"\}][^A-Z][^\n\r]*[\n\r]*/gm

  options.removeJSDocs = (null === options.removeJSDocs || undefined === options.removeJSDocs) ? true : options.removeJSDocs;
  options.removeMultilines = (null === options.removeMultilines || undefined === options.removeMultilines) ? true : options.removeMultilines;
  options.removeAnchors = (null === options.removeAnchors || undefined === options.removeAnchors) ? true : options.removeAnchors;
  options.removeSpecials = (null === options.removeSpecials || undefined === options.removeSpecials) ? true : options.removeSpecials;
  options.removeDoubleSlashes = (null === options.removeDoubleSlashes || undefined === options.removeDoubleSlashes) ? true : options.removeDoubleSlashes;
  options.removeHeaderLines = (null === options.removeHeaderLines || undefined === options.removeHeaderLines) ? true : options.removeHeaderLines;
  options.removeHTMLStyle = (null === options.removeHTMLStyle || undefined === options.removeHTMLStyle) ? true : options.removeHTMLStyle;
  options.removeHTMLStyle = (null === options.removeRegex || undefined === options.removeRegex || typeof options.removeRegex !== "string") ? "" : options.removeRegex;

  if (options.removeJSDocs) {
    contents = contents.replace(regexJSDocs, "");
  }
  if (options.removeMultilines) {
    contents = contents.replace(regexMultilines, "");
  }
  if (options.removeAnchors) {
    contents = contents.replace(regexAnchors, "");
  }
  if (options.removeSpecials) {
    contents = contents.replace(regexSpecials, "");
  }
  if (options.removeDoubleSlashes) {
    contents = contents.replace(regexDoubleSlashes, "");
  }
  if (options.removeHeaderLines) {
    contents = contents.replace(regexHeaderLines, "");
  }
  if (options.removeHTMLStyle) {
    contents = contents.replace(regexHTMLStyle, "");
  }
  if (options.removeRegex !== "") {
    contents = contents.replace(new RegExp(options.removeRegex), "");
  }
  return contents;
};
