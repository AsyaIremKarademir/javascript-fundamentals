//veri türlerini başka bir türe dönüştürmek için kullanılan fonksiyonlar vardır. 
// parseInt() - stringi tam sayıya dönüştürür
// toString() - sayıyı stringe dönüştürür
// number() - stringi sayıya dönüştürür

let age = window.prompt("what is your age?"); // kullanıcıdan yaş alır
age = Number(age); // stringi sayıya dönüştürür
age += 1;
console.log(age);