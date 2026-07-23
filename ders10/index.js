//STRING METHODS


let userName = "AsyaIrem";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("r"));
console.log(userName.lastIndexOf("r"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);
let result = userName.startsWith(" ");
let result1 = userName.endsWith(" ");
let result2 = userName.includes(" ");
phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
