const fruits = ["apple", "banana"];

fruits.push("mango", "lichi", "nashpati"); // Adds item at the end of the array

console.log(fruits);

fruits.pop(); // Removes items from the end of the array

console.log(fruits);

fruits.splice(2, 1);

console.log(`Splice ${fruits}`);

fruits.shift("lichi");

console.log(fruits);

fruits.unshift("korola");
console.log(`Unshift ${fruits}`);

// Find the index of an elelment

const numbers = [1, 6, 3, 4, 5];
const found = numbers.find((element) => element > 4);

console.log(`Found:  ${found}`);

const filtered = numbers.filter((element) => element < 6);
console.log(`Filter:  ${filtered}`);



for (const elelment of numbers) {
    console.log(elelment);
}


const maps = numbers.map((x) => x * 2);

console.log(maps);

