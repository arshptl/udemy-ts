const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const coke: (string | boolean | number)[] = ['brown', true, 40];
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['brown', true, 40];

