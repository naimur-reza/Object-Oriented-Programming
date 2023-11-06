{
  class Developer {
    name: string;
    role: string;
    experience: string;

    constructor(name: string, role: string, experience: string) {
      this.experience = experience;
      this.name = name;
      this.role = role;
    }
  }

  class JuniorDeveloper extends Developer {
    requiredSkills: string[];
    constructor(
      name: string,
      role: string,
      experience: string,
      requiredSkills: string[]
    ) {
      super(name, role, experience);
      this.requiredSkills = requiredSkills;
    }

    getJuniorGetTime() {
      console.log("My Coding Time is 10hr per day!");
    }
  }

  class SeniorDeveloper extends Developer {
    responsibility: string[];
    constructor(
      name: string,
      role: string,
      experience: string,
      responsibility: string[]
    ) {
      super(name, role, experience);
      this.responsibility = responsibility;
    }
    getSeniorCodeTime() {
      console.log("My Coding Time is 7hr per day!");
    }
  }

  const juniorDeveloper = new JuniorDeveloper(
    "john",
    "react-developer",
    "1year",
    ["python, typescript, nest.js"]
  );

  const seniorDeveloper = new SeniorDeveloper(
    "Bell",
    "app-developer",
    "6year",
    ["java", "php", "node.js", "c++"]
  );

  const getTime = (developer: Developer) => {
    if (developer instanceof SeniorDeveloper)
      // this is called instance guard
      return developer.getSeniorCodeTime();
  };

  getTime(seniorDeveloper);
}
