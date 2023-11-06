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

    get owner() {
      return this._owner;
    }
  }

  const newCar = new Car("Mazda", "NITRO-1500", "2013", "Laura");
  const owner = newCar.owner;
  console.log(owner);
}
