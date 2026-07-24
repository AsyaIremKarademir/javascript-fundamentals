//methot chaining= methot zincirleme

let username=window.prompt("Kullanıcı adınızı giriniz: ");

//no method chaining

// username=username.trim();
// username=username.toUpperCase();
// letter =letter.toUpperCase();

// let extraChars=username.slice(1);
// extraChars=extraChars.toLowerCase();
// username=letter+extraChars;

// console.log(username);

//method chaining


username=username.trim().toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
