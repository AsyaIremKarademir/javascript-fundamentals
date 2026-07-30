//reduce()=Bir dizideki tüm elemanları tek tek dolaşarak ve birikimli bir işlem yaparak diziyi tek bir değere indirger.

const paralar = [10, 20, 30];

const toplamPara = paralar.reduce((kumbara, para) => {
  return kumbara + para;
}, 0);

console.log(toplamPara);

//cikti: 60
//Koca bir listeyi teker teker elden geçirip,
//sıfırdan oluşturduğumuz bir yapının (dolabın) içine kurallara göre yerleştirir.

//////////OZET///////////

// map(): Dönüştürür (5 eleman ver, değişmiş 5 eleman al).

// filter(): Elenir (5 eleman ver, şarta uyan 2 eleman al).

// reduce(): Biriktirir/Ezer (5 eleman ver, hepsinin toplamından oluşan 1 tane sonuç al).