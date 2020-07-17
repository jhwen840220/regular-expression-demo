const { demo1, demo2, demo3 } = require('./index.js');

describe("demo 1", () => {
    test("(V)Input: R145578320", () => {
       const input = "R145578320"
      expect(demo1(input)).toBe(true);
    });
    test("(X)Input: r145578320", () => {
        const input = "r145578320"
        expect(demo1(input)).toBe(false);
    });
    test("(X)Input: R345578320", () => {
        const input = "R345578320"
        expect(demo1(input)).toBe(false);
    });
    test("(X)Input: R1455783209", () => {
        const input = "R1455783209"
        expect(demo1(input)).toBe(false);
    });
});

describe("demo 2", () => {
    test("(V)Input: 100", () => {
        const input = "100"
        expect(demo2(input)).toBe(true);
    });
    test("(V)Input: 0", () => {
        const input = "0"
        expect(demo2(input)).toBe(true);
    });

    test("(V)Input: 0.87", () => {
        const input = "9.87"
        expect(demo2(input)).toBe(true);
    });

    test("(X)Input: 889.878", () => {
        const input = "889.878"
        expect(demo2(input)).toBe(false);
    });

    test("(X)Input: 7.", () => {
        const input = "7."
       expect(demo2(input)).toBe(false);
    });
});

describe("demo 3", () => {
    test("(V)Input: 123", () => {
       const input = "123"
      expect(demo3(input)).toBe(true);
    });

    test("(V)Input: +123", () => {
        const input = "+123"
       expect(demo3(input)).toBe(true);
    });

    test("(V)Input: -123", () => {
        const input = "-123"
       expect(demo3(input)).toBe(true);
    });

    test("(V)Input: 0", () => {
        const input = "0"
       expect(demo3(input)).toBe(true);
    });

    test("(X)Input: 01", () => {
        const input = "01"
       expect(demo3(input)).toBe(false);
    });

    test("(X)Input: +0", () => {
        const input = "+0"
       expect(demo3(input)).toBe(false);
    });
});

