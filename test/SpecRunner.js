requirejs.config({
	baseUrl : '../app/js',
	paths : {
		jquery : 'vendor/jquery/jquery',
		underscore : 'vendor/underscore/underscore',
		backbone : 'vendor/backbone/backbone',
		bootstrap : 'vendor/twitter/bootstrap',
		marionette: 'vendor/backbone/backbone.marionette',
		text: 'vendor/require/text',
		templates: 'templates',
		jasmine: '../../test/lib/jasmine/jasmine',
		'jasmine-html': '../../test/lib/jasmine/jasmine-html',
		spec: '../../test/specs/'
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
		},
		jasmine : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : [ 'jasmine' ],
			exports : 'jasmine'
		}
	}

});

require([ 'underscore', 'jquery', 'jasmine-html' ], function(_, $, jasmine) {
	var jasmineEnv = jasmine.getEnv(), 
		htmlReporter = new jasmine.HtmlReporter(), 
		specs = [];

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	specs.push("../../test/specs/app_spec");
	
	$(function() {
		require(specs, function() {
			jasmineEnv.execute();
		});
	});
});
