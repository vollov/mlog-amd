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
		});
		it("should render as a list item", function() {
			expect(this.item.render().el.nodeName).toEqual('TR');
		});
	});
});