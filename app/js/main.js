requirejs.config({
	baseUrl : 'js',
	paths : {
		jquery : 'vendor/jquery/jquery',
		underscore : 'vendor/underscore/underscore',
		backbone : 'vendor/backbone/backbone',
		localstorage: "vendor/backbone.localStorage/backbone.localStorage",
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
		localstorage: {
			deps: ["backbone"],
			exports: 'localstorage'
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


