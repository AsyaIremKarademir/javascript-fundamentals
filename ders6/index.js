//işlevsellik eklemek için js kullanıyor olacağız çünkü oluşturduğumuz butonlar hiçbir şey yapmıyor sadece görsel olarak varlar.

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//increaseBtn.onclick = function(){ ... }: Artır butonuna tıklandığında süslü parantez { } içindeki kodları çalıştırır.

// count++;: Hafızadaki count değişkeninin değerini 1 artırır (Örn: 0 iken 1 yapar).

// countLabel.textContent = count;: Ekranda görünen countLabel etiketinin içindeki metni (textContent), yeni count değeriyle günceller.