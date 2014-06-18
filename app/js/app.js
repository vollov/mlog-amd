var TripManager = new Marionette.Application();

TripManager.addRegions({
	mainRegion : "#main-region"
});

TripManager.Trip = Backbone.Model.extend({
	urlRoot : 'trips'
});

TripManager.TripCollection = Backbone.Collection.extend({
	url : 'trips',
	model : TripManager.Trip
});

TripManager.TripItemView = Marionette.ItemView.extend({
	tagName: "tr",
	template : "#trip-list-item"
});

TripManager.TripsView = Marionette.CompositeView.extend({
	tagName: 'table',
	className: 'table table-hover',
	template: '#trip-list',
	itemView: TripManager.TripItemView,
	itemViewContainer: 'tbody'
});

TripManager.on("initialize:after", function() {
	var trips = new TripManager.TripCollection([ {
		description : 'Home to Toronto',
		startMileage : 189553,
		endMileage : 189664,
	}, {
		description : 'Toronto to home',
		startMileage : 189664,
		endMileage : 189775
	}, {
		description : 'Toronto to nthome',
		startMileage : 189775,
		endMileage : 189790
	} ]);
	
	var tripsListView = new TripManager.TripsView({
		collection: trips
	});
	
	TripManager.mainRegion.show(tripsListView);
});

TripManager.start();