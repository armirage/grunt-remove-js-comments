/*! 
	version: 1.0.0
	author: Clinton Mulligan
	license: BSD 3-Clause License
	Copyright (c) 2020, Clinton Mulligan. All rights reserved.
	https://github.com/armirage/grunt-remove-js-comments/blob/master/LICENSE.md
!*/

/*!
	grunt-remove-comments
	https://github.com/mac/grunt-remove-comments
 	Copyright (c) 2018 echoloyuk
 	Licensed under the MIT license.
 !*/

"use strict";

module.exports = function( grunt ) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	const removeComments = require( "../lib/index" );

	grunt.registerMultiTask( "remove-js-comments", "Finer control over removing Javascript comment lines. Multiline, singleline, JSDoc, and more.", function() {
		let options = this.options({
			removeJSDocs: false,
			removeMultilines: false,
			removeAnchors: false,
			removeSpecials: false,
			removeDoubleSlashes: false,
			removeHeaderLines: false,
			removeHTMLStyle: false,
			removeRegex: ""
		});

		this.files.forEach( function( f ) {
			f.src.filter( function( filepath ) {
				if ( !grunt.file.exists( filepath )) {
					grunt.log.warn( "Source file \"" + filepath + "\" not found." );
					return false;
				} else {
					let content = grunt.file.read( filepath );
					content = removeComments( content, options );

					let dest = f.dest || filepath;
					grunt.file.write( dest, content );
					grunt.log.writeln( "File \"" + dest + "\" created." );
					return true;
				}
			});

		});
	});

};
