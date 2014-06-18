define(["marionette" ], function(Marionette) {
	var TripManager = new Marionette.Application();

	TripManager.on('initialize:after', function(){
		console.log('Trip Manager has started');
	});
	
	return TripManager;
});