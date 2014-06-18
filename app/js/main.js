requirejs.config({
	baseUrl : 'js/vendor',
	paths : {
		jquery : 'jquery/jquery',
		underscore : 'underscore/underscore',
		backbone : 'backbone/backbone',
		bootstrap : 'twitter/bootstrap',
//		text: '../libs/require/text',
//		templates: '../templates'
		//sinon : '../libs/sinon/sinon'
	},

	shim : {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	}

});

require([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	console.log("jQuery version: ", $.fn.jquery);
	console.log("underscore identity call: ", _.identity(5));
	console.log("Backbone.history: ", Backbone.history);
});