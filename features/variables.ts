let apple: number = 10;
let color: string = 'red';
let hasName: boolean = true;


let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in objects
let now: Date = new Date();


// Array (Type annotation for an array)
let colors: string[] = ['red', 'green', 'blue'];
let marks: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];


// Classes
class Car{

}

const car = new Car();

// Object literal
const point: {x: number, y: number} = {
    x: 10,
    y: 20
}


//function
const logNumber : (i: number) => void = (i : number) => {
    console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates : {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initiialize it later
const words = ['red', 'green', 'blue'];
let foundWord : boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}


// 3) Variable whose type cannot be inferred correctly
const numbers = [-10, -1, 12];

let numberAboveZero : boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
} 