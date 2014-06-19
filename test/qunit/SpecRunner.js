requirejs.config({
	baseUrl : '../../app/js',
	urlArgs: 'cb=' + Math.random(),
	paths : {
		jquery : 'vendor/jquery/jquery',
		underscore : 'vendor/underscore/underscore',
		backbone : 'vendor/backbone/backbone',
		bootstrap : 'vendor/twitter/bootstrap',
		marionette: 'vendor/backbone/backbone.marionette',
		text: 'vendor/require/text',
		templates: 'templates',
		sinon: '../../test/lib/sinon/sinon',
		qunit: '../../test/lib/qunit/qunit',
		spec: '../../test/qunit/specs/'
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
		qunit : {
			exports : 'QUnit'
		},
		sinon : {
			exports : "sinon"
		}
	}
});

window.store = "TestStore"; // override local storage store name - for testing

require(['underscore', 'jquery', 'qunit', 'sinon'], function(_, $, QUnit, sinon){

  var specs = [];
  specs.push("../../test/qunit/specs/app_spec");
  
//  specs.push('spec/models/TodoSpec');
//  specs.push('spec/views/ClearCompletedSpec');
//  specs.push('spec/views/CountViewSpec');
//  specs.push('spec/views/FooterViewSpec');
//  specs.push('spec/views/MarkAllSpec');
//  specs.push('spec/views/NewTaskSpec');
//  specs.push('spec/views/TaskListSpec');
//  specs.push('spec/views/TaskViewSpec');

  $(function(){
    require(specs, function(){
      // nothing to do here
    });
  });

});
