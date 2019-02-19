describe("fizzBuzzGame", function() {
    /* A test suite begins with a call to the global
    Jasmine function describe with two parameters: 
    a string and a function.*/
    beforeEach(function () {
        number = new fizzBuzzGame();
    });
    
    describe("Checks number", function() {
        // Specs are defined by calling the global Jasmine function it
        /*it("should exist", function() {
            expect(fizzBuzzGame).toBeDefined();
        });*/
        
        it("should return fizzbuzz when the number is divisible by 3 and 5", function() {
            var result = fizzBuzzGame(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return fizz when the number is divisible by 3", function() {
            var result = fizzBuzzGame(9)
            expect(result).toBe("Fizz");
        });
        
        it("should return buzz when the number is divisible by 5", function() {
            var result = fizzBuzzGame(10)
            expect(result).toBe("Buzz");
        });
        
        it("should return all other numbers in range", function() {
            var result = fizzBuzzGame(1)
            expect(result).toBe("");
        });
    });
});