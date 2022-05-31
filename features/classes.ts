class Vehical {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Honking...");
  }
}

class Carr extends Vehical {

    constructor(public wheel: number, color: string) {
        super(color);
    }

  private drive(): void {
    console.log("vrooom...");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carrr = new Carr(4, "pink");
const vehical = new Vehical("orange");

carrr.startDrivingProcess();
console.log(carrr.color);
