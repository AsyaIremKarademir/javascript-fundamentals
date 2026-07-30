//filter()=adından da anlaşılacağı gibi bir dizideki elemanları belirlediğiniz bir koşula göre filtreler.
//Her elemanı test eder; koşulu sağlayanları (true dönenleri) tutar, sağlamayanları çöpe atar.
//ve sadece geçenlerden oluşan yeni bir dizi döndürür.

const urunler = [
  { ad: "Kablosuz Mouse", fiyat: 350, stok: true, kategori: "Elektronik" },
  { ad: "Mekanik Klavye", fiyat: 1200, stok: true, kategori: "Elektronik" },
  { ad: "Çalışma Masası", fiyat: 2500, stok: false, kategori: "Mobilya" },
  { ad: "USB Bellek", fiyat: 150, stok: true, kategori: "Elektronik" },
  { ad: "Sırt Çantası", fiyat: 450, stok: true, kategori: "Aksesuar" }
];

const filtrelenmisUrunler = urunler.filter(urun => {
  return urun.stok === true && urun.fiyat < 500 && urun.kategori === "Elektronik";
});

console.log(filtrelenmisUrunler);