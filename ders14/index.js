//number guessing game 

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; //bu satırda 1 ile 100 arasında rastgele bir sayı üretiyoruz

let attempts = 0; //Kullanıcının kaç kere tahminde bulunduğunu sayar.
let guess; //Kullanıcının gireceği sayıyı tutacak değişkendir. Şimdilik içi boştur.
let running = true; //Oyunun devam edip etmediğini kontrol eder. Başlangıçta true (doğru/açık) olarak ayarlanır, böylece oyun başlar.

while(running){ //running değişkeni true olduğu sürece bu parantezlerin { } içindeki kodlar tekrar tekrar çalışır.
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`); //Guess a number between 1 - 100" (1 ile 100 arasında bir sayı tahmin edin).
    guess = Number(guess); //Kullanıcının kutucuğa girdiği değer her zaman metin (string) olarak gelir. Bu komut, o metni matematiksel bir sayıya (number) dönüştürür.
    
    if(isNaN(guess)){  //"Sayı Değil mi?" anlamına gelir. Kullanıcı sayı yerine harf veya boşluk girerse bu kısım çalışır.
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}