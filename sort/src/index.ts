import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollectionl";

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
