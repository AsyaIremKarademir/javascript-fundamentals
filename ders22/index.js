//foreach()= dizi (array) içindeki elemanları tek tek dolaşarak her bir eleman için belirli bir işlemi yapmamızı sağlayan bir döngü metodudur.


const alisverisListesi = ["Elma", "Süt", "Ekmek", "Yumurta"];

// Dizideki her bir 'urun' için süslü parantez içindeki kodu çalıştır

alisverisListesi.forEach(function(urun) {  

  console.log("Alınacak: " + urun);

});

// alisverisListesi: Yukarıda oluşturduğumuz listeyi çağırıyoruz.

// .forEach(...): "Bu listenin içindeki her bir eleman için parantez içindeki işlemi sırayla yap" emrini veriyoruz.

// function(urun): Bu, forEach'e verdiğimiz callback fonksiyonudur. Döngü her adımda sıradaki elemanı alır ve ona geçici olarak urun adını takar (İlk adımda urun = "Elma" olur, ikinci adımda "Süt" olur).

// {: Süslü parantez, her bir ürün için yapılacak olan işlemlerin (gövdenin) başladığı yeri işaret eder.






// Arrow function (ok fonksiyonu) ile daha kısa yazımı:
// alisverisListesi.forEach(urun => console.log("Alınacak: " + urun));

