//Constructor function



// function Persons (name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(`Name is ${this.name} and age is ${this.age}`)
//     }
// }

// const john = new Persons("suhail", 26)
// console.log(john)
// john.sayHello()


//Classes

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age=age
//     }
//     sayHello () {
//         console.log(`my name is ${this.name} and ${this.age}`)
//     }
// }
// const bruce = new Animal('suhail', 26)
// bruce.sayHello();

// Define the desired category
// const desiredCategory = "apple";

// Sample array with multiple categories
// const array = [
//     { name: "item1", category: "mango" },
//     { name: "item2", category: "apple" },
//     { name: "item3", category: "banana" },

// ];


// const filteredArray = array.filter(item => item.category === desiredCategory);
// console.log(filteredArray)

// filteredArray.forEach(item => console.log(item.name));

// let arr = ["apple", "banana", "mango"]
// let newArr = arr.filter((item) => {
//     return item!=="apple"&& item!=="banana"
// })
// console.log(newArr.join(" "))


//merge to array without higher order function
// let arr1 = [1, 3, 11, 5];
// let arr2 = [7, 10, 12, 15];
// output=[1,3,5,7,10,11,12,15]
// let arr3 = [];

// let i = 0;
// let j = 0;

// while (i < arr1.length || j < arr2.length) {
//     if (i === arr1.length) {
//         arr3.push(arr2[j]);
//         j++;
//     } else if (j === arr2.length) {
//         arr3.push(arr1[i]);
//         i++;
//     } else if (arr1[i] < arr2[j]) {
//         arr3.push(arr1[i]);
//         i++;
//     } else {
//         arr3.push(arr2[j]);
//         j++;
//     }
// }

// console.log(arr3.join(" "));


// merge two array and return value as sortd
// let arr1 = [1, 3, 31, 25];
// let arr2 = [7, 10, 12, 15];
// let arr = [...arr1, ...arr2];
// function sortedArray(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;

//             }
//         }
//     }
//     return arr;
// }

// console.log(sortedArray(arr.join(" ")));


// revres an array
// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//     // Swap elements at start and end indices
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     // Move the pointers inward
//     start++;
//     end--;
// }

// console.log(arr);



// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]
// output=[10,9,8,7,6,5,3,2,1]

// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp;
//     start++;
//     end--;

// }
// console.log(arr.join(" "))
// let arr1 = [1, 3, 5]
// let arr2 = [2, 4, 6]
// output=[1,2,3,4,5,6]
// let arr=[...arr1,...arr2]
// function sortedArray (arr) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length - 1 - i; j++){
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;
// }
//         }
//     }
//     return arr.join(" ");

// }
// console.log(sortedArray(arr))


// const array = [2, 3, 4, 5];
// const addValue = 1;

// // Shift elements to the right
// for (let i = array.length; i > 0; i--) {
//     array[i] = array[i - 1];
// }

// array[0] = addValue;

// console.log(array);

// const array = [2, 3, 4, 5];
// const newValue = 10;

// // Assign the new value at the last position
// array[array.length] = newValue;

// console.log(array);


// let arr = [2, 3, 4, 5];
// arr.unshift(2);

// console.log(arr);
// let array = [2, 3, 4, 5];
// array.push(1);

// console.log(array);

// const array = ["key1", "value1", "key2", "value2", "key3", "value3"];

// const obj = array.reduce((acc, currentValue, index, array) => {
//     if (index % 2 === 0) {
//         // Even index: treat it as a key
//         acc[currentValue] = array[index + 1];
//     }
//     return acc;
// }, {});

// console.log(obj);


const arr = [1, 2, 3, 4];

const obj = arr.reduce((acc, currentValue, index) => {
    acc[index] = currentValue;
    return acc;
},{});

console.log(obj);

// const arr = [1, 2, 3, 4];
// const obj = {};

// for (let i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
// }

// console.log(obj);
