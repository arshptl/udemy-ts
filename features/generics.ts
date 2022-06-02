class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }
    
    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);


// const printStrings = (arr : string[]) => {
//     for (let i = 0; i < arr.length; i++) { 
//         console.log(arr[i]);
//     }
// } 

// const printNumbers = (arr: number[]) => {
//     for (let i = 0; i < arr.length; i++) { 
//         console.log(arr[i]);
//     }
// } 

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) { 
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);