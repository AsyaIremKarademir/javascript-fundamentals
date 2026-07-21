// how to accept user input in javascript
// 1. pencere sistemi oluşturmak (window prompt)
// 2. HTML metin kutusu oluşturmak (text box)

/*1. yol
 let username;
 username= window.prompt("what is your name?"); // kullanıcıdan isim alır
 console.log(username);
 */


// 2.yol 
//"Bir butona tıklandığında (onclick), metin kutusundaki değeri (value) alıp konsola yazdırma işlemi."
let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value; // kullanıcıdan isim alır
    console.log(username);

}