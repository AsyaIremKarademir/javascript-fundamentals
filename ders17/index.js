//array

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.push("coconut");  //eleman ekleme
fruits.pop();            //son elemanı kaldırma
fruits.unshift("mango"); //dizinin en başına yeni bir eleman eklemek
fruits.shift();          //dizinin başından siler.
let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

console.log(numOfFruits);
console.log(index);

fruits.sort(); //a'dan z'ye sıralar.
fruits.sort().reverse(); //z'den a'ya sıralar.

for(let fruit of fruits){  //Dizilerde gezinmek için en modern ve temiz yöntemlerden biridir.
    console.log(fruit);
}