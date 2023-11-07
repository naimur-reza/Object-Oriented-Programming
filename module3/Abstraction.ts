{
  //  abstraction is a thing where this create the way of make method or anything but this class cant make instance

  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  abstract class Car implements Vehicle {
    abstract startEngine(): void;
    abstract move(): void;
    abstract stopEngine(): void;
  }

  class Toyota extends Car {
    startEngine(): void {
      console.log("Starting");
    }
    move(): void {
      console.log("Moving");
    }
    stopEngine(): void {
      console.log("Stopping");
    }
  }

  const newCar = new Toyota();
  newCar.startEngine();
  newCar.move();
}
