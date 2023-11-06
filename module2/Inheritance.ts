{
  // inheritance method in oop

  class Person {
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string) {
      this.age = age;
      this.email = email;
      this.name = name;
    }
  }

  class Student extends Person {
    classAt: string;

    constructor(name: string, age: number, email: string, classAt: string) {
      super(name, age, email); // we have to call super when we're using property from parent class
      this.classAt = classAt;
    }
  }
  const student = new Student("Abraham", 21, "abraham@xyz", "12th");

  class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, email: string, designation: string) {
      super(name, age, email);
      this.designation = designation;
    }
  }
  const teacher = new Teacher("Iya", 32, "iya.edu@xyz", "Physics Teacher");
}
