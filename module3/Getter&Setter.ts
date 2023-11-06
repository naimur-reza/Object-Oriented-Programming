{
  class Car {
    public name: string;
    public model: string;
    public releaseYear: string;
    protected _owner: string;

    constructor(
      name: string,
      model: string,
      releaseYear: string,
      owner: string
    ) {
      this.name = name;
      this.model = model;
      this.releaseYear = releaseYear;
      this._owner = owner;
    }

    // getter and setter method

    // use getter for get the owner
    get owner() {
      return this._owner;
    }

    // use setter to update the owner

    set updateOwner(name: string) {
      this._owner = name;
    }
  }

  const newCar = new Car("Mazda", "NITRO-1500", "2013", "Laura");

  newCar.updateOwner = "Ray";

  const owner = newCar.owner;
  console.log(owner);
}
