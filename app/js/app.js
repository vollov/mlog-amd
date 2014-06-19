define(["underscore", "marionette",
        "text!templates/trip_list_item.html",
        "text!templates/trip_list.html"], function(_, Marionette, tplTripListItem,
        		tplTripList) {
	var TripManager = new Marionette.Application();

	TripManager.addRegions({
		mainRegion : "#main-region"
	});

	TripManager.Trip = Backbone.Model.extend({
		urlRoot : 'trips',
		defaults: {
			description: 'trip description',
			startMileage : 0,
			endMileage : 0
		}
	});

	TripManager.TripCollection = Backbone.Collection.extend({
		url : 'trips',
		model : TripManager.Trip
	});

	TripManager.TripItemView = Marionette.ItemView.extend({
		tagName: "tr",
		template : _.template(tplTripListItem)
	});

	TripManager.TripsView = Marionette.CompositeView.extend({
		tagName: 'table',
		className: 'table table-hover',
		template: _.template(tplTripList),
		itemView: TripManager.TripItemView,
		itemViewContainer: 'tbody'
	});

	TripManager.on("initialize:after", function() {
		console.log('Trip Manager has started');
		
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
	
	return TripManager;
});