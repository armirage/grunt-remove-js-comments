/*# Title: @armirage/grunt-remove-js-comments #*/
/*! Attribution comments, I want to keep these !*/

/**
 * @Module JSDocs
 * @function hello
 */

function hello() {
	return "Hello";
}
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
console.log( hello(), "World" );
