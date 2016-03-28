describe("Calculator", function(){

    //Reset the value of current to 0 before executing each it statement
    beforeEach(function() {
        Calculator.current = 0;

    });

    describe("when adding numbers", function() {

        it("should store the current value at all times", function(){
            expect(Calculator.undefined).not.toBeDefined();
            expect(Calculator.current).toBeDefined();
        });

        it("should add numbers", function(){
            expect(Calculator.add(5)).toEqual(5);
            expect(Calculator.add(10)).toEqual(15);
        });

        //Note that value of current has been reset as 0 before executing below it statement
        it("should add any number of numbers", function() {
            expect(Calculator.add(1,2,3)).toEqual(6);
            expect(Calculator.add(1,2,3,4)).toEqual(16);
        });
    });

    describe("when subtracting numbers", function() {
        it("should subtract any number of numbers", function() {
            expect(Calculator.subtract(5)).toEqual(-5);
        })
    });

    it("should reset the current value", function() {
        Calculator.current = 20;
        Calculator.reset();

        expect(Calculator.current).toEqual(0);

        Calculator.add(5);
        Calculator.add(20);
        expect(Calculator.current).toEqual(25);

        Calculator.reset();

        expect(Calculator.current).toEqual(0);
    });

});