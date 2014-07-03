define([ 'app' ], function(TripManager) {
	describe("TripManager Test Suit", function() {
		it("TripManager should not to be null", function() {
			expect(TripManager).not.toBe(null);
		});

	});

	describe("Trip model Test Suit", function() {
		beforeEach(function() {
			this.trip = new TripManager.Trip();
		});

		it("should default the description to 'trip description'", function() {
			expect(this.trip.get('description')).toBe('trip description');
		})
	});

	describe("Persistence", function() {
		beforeEach(function() {
			this.trip = new TripManager.Trip();
			spyOn(this.trip, 'save');
			
			//this.save_stub = sinon.stub(this.todo, "save");
		});
//		afterEach(function() {
//			this.save_stub.restore();
//		})
		it("should update server when title is changed", function() {
			this.trip.set('description', 'description here');
			expect(this.trip.save).toHaveBeenCalled();
			//this.save_stub.should.have.been.calledOnce;
		});
//		it("should update server when status is changed", function() {
//			this.todo.set('complete', true);
//			this.save_stub.should.have.been.calledOnce;
//		})
	});
		
	describe("Trip List Item View", function() {
		beforeEach(function() {
			this.trip = new TripManager.Trip({
				description : 'home to office'
			});
			this.item = new TripManager.TripItemView({
				model : this.trip
			});
		});
		
		it("render() should return the view object", function() {
			expect(this.item.render()).toBe(this.item);
			this.item.$el.find("button").click();
			console.log(typeof(this.item.$el.find("td")));
		});
		it("should render as a list item", function() {
			expect(this.item.render().el.nodeName).toEqual('TR');
		});
	});
	
	describe("Trips List View", function() {
		beforeEach(function(){
			this.trips = new TripManager.TripCollection([{
				description : 'Home to Toronto',
				startMileage : 189553,
				endMileage : 189664,
			}, {
				description : 'Toronto to home',
				startMileage : 189664,
				endMileage : 189775
			}]);
			this.tripsListView = new TripManager.TripsView({collection: this.trips});
		});
		
		it("render() should return the view object", function() {
			expect(this.tripsListView.render()).toBe(this.tripsListView);
		});
		
		it("should render as an unordered list", function() {
			expect(this.tripsListView.render().el.nodeName).toEqual("TABLE");
		});
		

		it("should include list items for all models in collection",function() {
			this.tripsListView.render();
			console.log(this.tripsListView.$el.find("TR"));
			expect(this.tripsListView.$el.find("TR").length).toBe(3);
		});
	});
});