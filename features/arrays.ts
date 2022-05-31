const carMakers: string[] = ["Toyota", "Ford", "Chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values (we don't need to specify type explicitly)
const carr = carMakers[2];
const discontinuedCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

//Help with maps

carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2020-10-10');


