/*
 * grunt-plugin-testing
 *
 * Copyright (c) 2020 Clint Mulligan
 * Licensed under the BSD-3-Clause license.
 */

module.exports = function( grunt ) {

	grunt.initConfig({
		"remove-js-comments": {
			dev: {
				options: {
					removeJSDocs: false,
					removeMultilines: true,
					removeAnchors: true,
					removeSpecials: false,
					removeHeaderLines: false,
					removeDoubleSlashes: true,
					removeHTMLStyle: true,
					removeRegex: ""
				},
				src: "index.js",
				dest: "index.js",
				expand: false
			}
		},

		pkg: grunt.file.readJSON( "package.json" )
	});

	grunt.loadNpmTasks( "@armirage/grunt-remove-js-comments" );

	grunt.registerTask( "default", [ "remove-js-comments" ]);
};
