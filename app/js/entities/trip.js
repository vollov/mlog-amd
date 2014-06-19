//define(["app", "localstorage"], function(TripManager, localstorage){
//	
//	TripManager.module('Entities', function(Entities, TripManager, Backbone,
//			Marionette, $, _) {
//		Entities.Trip = Backbone.Model.extend({
//			urlRoot: 'trips',
//			
//			defaults: {
//				description: '',
//				startMileage : 0,
//				endMileage : 0
//			}
//		});
//		
//		Entities.configureStorage(Entities.Trip);
//		
//		Entities.TripCollection = Backbone.Collection.extend({
//			url: 'trips',
//			model : Entities.Trip
//		});
//
//		Entities.configureStorage(Entities.TripCollection);
//		
//		var initializeTrips = function() {
//			var trips = new Entities.TripCollection([ {
//				description : 'Home to Toronto',
//				startMileage : 189553,
//				endMileage : 189664,
//			}, {
//				description : 'Toronto to home',
//				startMileage : 189664,
//				endMileage : 189775
//			}, {
//				description : 'Toronto to nthome',
//				startMileage : 189775,
//				endMileage : 189790
//			} ]);
//			
//			trips.forEach(function(trip){
//				trip.save();
//			});
//			
//			return trips.models;
//		}
//
//		var API = {
//			getTripEntities : function() {
//				var trips = new Entities.TripCollection();
//				trips.fetch();
//				
//				if(trips.length === 0){
//					return initializeTrips();
//				}
//				
//				return trips;
//			},
//			getTripEntity: function(tripId){
//				var trip = new Entities.Trip({id: tripId});
//				trip.fetch();
//				return trip;
//			}
//		};
//
//		TripManager.reqres.setHandler('trip:entities', function() {
//			return API.getTripEntities();
//		});
//		
//		TripManager.reqres.setHandler("trip:entity", function(id) {
//			return API.getTripEntity(id);
//		});
//	});
//	
//});
//
//
