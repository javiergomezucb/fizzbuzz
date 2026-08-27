import fizzbuzz from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia retornar el mismo numero si no sigue la regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });


  it("deberia retornar otro numero que no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

    it("deberia retornar fizz si el numero es divisible por 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

   it("deberia retornar fizz si el numero es divisible por 3", () => {
    expect(fizzbuzz(6)).toEqual("fizz");
  });
});