{
  class Number {
    static value: number;
    constructor() {
      Number.value = 5;
    }

    static increment() {
      return Number.value + 1;
    }

    static decrement() {
      return Number.value - 1;
    }
  }

  //   const initialNumber = new Number();

  //   const num1 = initialNumber.increment();
  //   const num2 = initialNumber.decrement();

  console.log(Number.increment(), Number.decrement());
}
