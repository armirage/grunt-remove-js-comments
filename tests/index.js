#!/usr/bin/env node
/*# Title: @armirage/grunt-remove-js-comments #*/
/*! Attribution comments, I want to keep these !*/

// ANCHOR Start of code here

/**
 * @Module JSDocs
 * @function hello
 */

/*
 Multi line comments can go
 except I want to keep the JSDocs for API documentation
 */

function hello() {
	// returns a string
	return "Hello";
}

// This can go but keep the line to separate the page...
// Management loves these annoying decorations for some reason.
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/* Logs results */
console.log( hello(), "World" );
