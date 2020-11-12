// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return "Hello, World!" when passed "undefined"', function() {
        expect(sayHello()).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed "5"', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed 5', function() {
        expect(sayHello(5)).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed the array [2,3]', function() {
        expect(sayHello([2,3])).toBe("Hello, World!");
    })
})

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    })
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    })
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    })
    it('should return true when passed "5"', function() {
        expect(isFive("5")).toBe(true);
    })
})

describe('isEven', function() {
    it('should be a defined function', function() {
        expect (typeof isEven).toBe("function")
    })
    it('should return true when passed 2', function() {
        expect (isEven(2)).toBe(true)
    })
    it('should return true when passed -5', function() {
        expect(isEven(-4)).toBe(true)
    })
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe(false)
    })
    it('should return false when passed "banana"', function() {
        expect(isEven("banana")).toBe(false)
    })
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe(true);
    })
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when passed boolean inputs like "true" or "false"', function() {
        expect(isEven(false) || isEven(true)).toBe(false);
    })
    it('should return false when called without an argument like isEven()', function() {
        expect(isEven()).toBe(false);
    })
})
describe("isVowel", function() {
    it('should always return a boolean', function() {
        expect(typeof isVowel()).toBe("boolean")
    })
    it('should return true when passed "a"', function () {
        expect(isVowel("a")).toBe(true);
    })
    it('should return true when passed "A"', function() {
        expect(isVowel("A")).toBe(true);
    })
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    })
    it('should return false when passed a boolean', function() {
        expect(isVowel(true) || isVowel(false)).toBe(false);
    })
    it('should return false when passed 4', function() {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when passed "banana"', function() {
        expect(isVowel("banana")).toBe(false)
    })
    it('should return false when called with undefined input', function() {
        expect(isVowel()).toBe(false)
    })
})

describe("add", function() {
    it('should return 5 when passed 2 and 3', function() {
        expect(add(2,3)).toBe(5);
    })
    it('should return -12 when passed -3 and -9',function() {
        expect(add(-3,-9)).toBe(-12);
    })
    it('should return 11 when passed "5" and 6', function () {
        expect(add("5",6)).toBe(11);
    })
    it('should return "NaN" when passed "banana" and "split"', function () {
        expect(isNaN(add("banana","split"))).toBe(isNaN(parseFloat("banana")));
    })
    it('should return NaN when passed 2 and "apples"', function() {
        expect(isNaN(add(2,"apples"))).toBe(isNaN("apples"))
    })
    it('should return NaN when called with no inputs', function() {
        expect(isNaN(add())).toBe(isNaN("banana"));
    })

})
