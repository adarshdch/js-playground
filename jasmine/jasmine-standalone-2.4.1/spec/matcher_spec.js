describe('Jasmine Features', function() {
	describe('Jasmine Matchers', function() {
		it("should return true", function() {
			expect(true).toEqual(true);

			expect(true).toBeTruthy();

			expect(false).not.toBeTruthy();

			expect(false).toBeFalsy();
		});

		it("returns an array of names", function () {
			expect(["adarsh", "amit"]).toContain('adarsh');

			expect(["adarsh", "amit"]).not.toContain('Adarsh');
		});
	});

	describe('User', function() {
		it("should ensure that the user is 21 or older", function () {
			expect(User.getAge()).toBeGreaterThan(20);
			expect(User.getAge()).toBeLessThan(50);
		});
	});

	
});