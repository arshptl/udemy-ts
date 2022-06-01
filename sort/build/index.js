"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollectionl_1 = require("./NumbersCollectionl");
const numbersCollection = new NumbersCollectionl_1.NumbersCollection([10000, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
