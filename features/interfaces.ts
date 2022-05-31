// generic interface to describe the shape or the different properites 
// of an object
interface Reportable {
  summary(): string;
}

const oldSwift = {
  name: "Swift",
  year: 2014,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinkk = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// This function takes any type of object that has a "summary method" and has a type
// of "Reportable"
const printSummary = (item: Reportable) => {
  console.log(`Summary: ${item.summary()}`);
};

printSummary(oldSwift);
printSummary(drinkk);

