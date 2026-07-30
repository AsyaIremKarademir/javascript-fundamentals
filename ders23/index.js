//map()=dönüştürmek anlamına gelir.
//Elimdeki bu listenin içindeki her bir şeye şu işlemi uygula
//ve bana o değiştirilmiş hallerinden oluşan aynı boyutta yeni bir liste ver, demektir.


const misafirler = ["Ali", "Ayşe", "Can"];
const resmiListe = misafirler.map(misafir => "Sayın " + misafir);
console.log(resmiListe);

////ornek2////

const kullanicilar = [
  { isim: "Ahmet", yas: 28, meslek: "Mühendis" },
  { isim: "Zeynep", yas: 32, meslek: "Öğretmen" },
  { isim: "Ege", yas: 24, meslek: "Tasarımcı" }
];

const kartvizitler = kullanicilar.map(kullanici => {
  return kullanici.isim + " - " + kullanici.meslek;
});

console.log(kartvizitler);