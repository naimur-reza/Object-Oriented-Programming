{
  // polymorphism

  class Person {
    public getSleep(): void {
      console.log("I'm a normal kiddo, i sleep 8 hr per day");
    }
  }

  class Developer extends Person {
    public getSleep(): void {
      console.log("I'm a developer. I sleep 6hr per day!");
    }
  }

  const getSleepingHours = (param: Person) => {
    return param.getSleep();
  };

  const person = new Person();
  const developer = new Developer();

  getSleepingHours(person);
  getSleepingHours(developer);

  //  second example
}
