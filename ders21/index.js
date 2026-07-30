//callbacks(geri cagirma fonksiyonlari)
//dosya okuma, ag istekleri veya veritabanlariyla etkilesim gibi eszamansiz islemleri yonetmek icin kullanilirlar.
//mesela dosyayı okumayi bitirdiginde icerigi goruntule gibi

//NORMALDE BOYLE YAPARIZ AMA BU HALİYLE HELLO FONK OLASI BIR YAVASLAMADA ONCE GOODBYE CALISIR SONRA HELLO CALISIR.BU ISTEMEDIGIMIZ BIR DURUM

// function hello()
// {
//     console.log("hello");
// }

// hello();

// function goodbye(){
//     console.log("goodbye");
// }

// goodbye();


////////CALLBACK FONK///////
hello(goodbye);

function hello(callback){
    console.log("hello");
    callback();
}

function goodbye(){
    console.log("goodbye");
}


// Ana fonksiyonumuz: Bir isim alır ve bir callback fonksiyonu alır
function karsila(isim, callback) {
  console.log("Merhaba, " + isim + "!");
  
  // İşlem bittikten sonra bize verilen fonksiyonu çalıştırıyoruz
  callback(); 
}

// Callback olarak kullanacağımız fonksiyon
function vedalas() {
  console.log("Görüşmek üzere, kendine iyi bak!");
}

// karsila fonksiyonunu çağırırken, vedalas fonksiyonunu parametre olarak veriyoruz.
// DİKKAT: vedalas yazarken yanına () koymuyoruz, çünkü onu hemen çalıştırmak değil, karsila'nın içine göndermek istiyoruz.
karsila("Ahmet", vedalas);

//cıktı:
//Merhaba, Ahmet!
//Görüşmek üzere, kendine iyi bak!
