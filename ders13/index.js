//for loops
//while döngüsü bazı kodları sonsuza kadar tekrarlayabilir.for döngüsü ile sınırlı sayıda tekrarlayabiliriz. for döngüsü ile bir değişkeni belirli bir sayı kadar artırabiliriz. for döngüsü üç bölümden oluşur: başlangıç, koşul ve artış.


for(let i = 0; i < 20; i++){

    if(i==13){
        continue;  //bu kısımda continue kullanarak 13 sayısını atlıyoruz ve döngüye devam ediyoruz.
    }
    else{
        console.log(i);
    }
}

for(let j = 0; j < 20; j++){

    if(j==13){
        break;  //bu kısımda break kullanarak 13 sayısını atlıyoruz ve döngüden çıkıyoruz.
    }
    else{
        console.log(j);
    }
}