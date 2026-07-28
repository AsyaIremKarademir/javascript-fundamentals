//spread operatörü (...), dizi veya nesnelerin içindeki elemanları paketlerinden çıkararak kolayca kopyalamayı, birleştirmeyi veya fonksiyonlara tek tek göndermeyi sağlayan bir kısayoludur.

let meyveler = ["Elma", "Armut"];
let sebzeler = ["Havuç", "Domates"];

// İki diziyi birleştirip içine ekstra bir eleman ekliyoruz
let pazarSepeti = [...meyveler, ...sebzeler, "Süt"]; 

console.log(pazarSepeti); 
// Çıktı: ["Elma", "Armut", "Havuç", "Domates", "Süt"]


let sayilar = [14, 5, 87, 23];

// Sadece diziyi verirsek çalışmaz (NaN döner) 
// console.log(Math.max(sayilar)); 

// Spread operatörü ile diziyi parçalayarak veriyoruz: Math.max(14, 5, 87, 23)
console.log(Math.max(...sayilar)); 
// Çıktı: 87