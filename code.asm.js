function MathModule() {
  "use asm";

  function cube(value) {
    value = +value;
    return +(+value * +value * +value);
  }

  return {cube: cube};
}
