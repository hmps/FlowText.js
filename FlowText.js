/*!
* FlowText.js 0.5
*
* Copyright 2013, Hampus Persson http://hmps.se
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: 2013-11-04
*/

Object.prototype.FlowText = function(opts) {
	// If opts isn't passed in an empty object is setup.
	if( 'object' !== typeof opts) { var opts = {}; }

	var $el = this,
		value;

	// Setup the options
	var options = {
		maxWidth		: opts.maxWidth		|| false, // For future use
		minWidth		: opts.minWidth 	|| false, // For future use
		maxFont			: opts.maxFont 		|| 36,
		minFont			: opts.minFont 		|| 16,
		compressor		: opts.compressor 	|| 20,
		debug			: opts.debug 		|| false // For future use
	};

	// The reflow function provides the main functionality
	$el.reflow = function(width) {
		if( 'number' !== typeof width ) { return false;	} // reflow can't be called without a width
		var fz = width/options.compressor < options.minFont ? options.minFont : width/options.compressor;

		// If a single element is passed in this.length will be undefined
		if( undefined === this.length ) {
			this.style.fontSize = fz+'px';

		// If a group of elements are passed in this.length will tell us how many
		} else {
			for ( var i=0 ; i < this.length; i++ ) {
				this[i].style.fontSize = fz+'px';
			}
		}
	}

	// Call reflow to setup the initial text size
	$el.reflow( $el.offsetWidth );

	// Attach an event listener to listen for window.resize
	window.addEventListener('resize', function() {
		$el.reflow(window.innerWidth);
	});

	return $el;
};