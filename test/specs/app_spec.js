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
});