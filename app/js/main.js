requirejs.config({
	baseUrl : 'js',
	paths : {
		jquery : 'vendor/jquery/jquery',
		underscore : 'vendor/underscore/underscore',
		backbone : 'vendor/backbone/backbone',
		bootstrap : 'vendor/twitter/bootstrap',
		marionette: 'vendor/backbone/backbone.marionette',
		text: 'vendor/require/text',
		templates: 'templates'
		//sinon : '../libs/sinon/sinon'
	},

	shim : {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		}
	}

});

require([ 'app' ], function(TripManager) {
	TripManager.start();
});


