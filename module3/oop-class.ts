{
  //  oop - class

  class Person {
    // public name: string;
    // public age: number;
    // public email: string;

    //   parameter properties
    constructor(public name: string, public age: number, public email: string) {
      //   this.name = name;
      //   this.age = age;
      //   this.email = email;
    }
  }

  const person = new Person("John Wick", 21, "wick@xyz");

  console.log(person.age);
}
