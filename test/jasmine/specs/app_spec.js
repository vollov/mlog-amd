define(['app'], function(TripManager) {
  describe("TripManager", function() {
    it("TripManager should not to be null", function() {
    	//expect(TripManager).toBe('x');
      expect(TripManager).not.toBe(null);
    })
  });
});