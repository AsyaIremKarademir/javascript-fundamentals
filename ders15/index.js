//function= tekrar kullanılabilir bir kod parçasıdır.

function happyBirthday(username){
    console.log("happy birthday to you");
    console.log(`happy birthday dear ${username}`); //ters tırnak işareti windowsta (alt gr+ noktalı virgül) ile yapılır.
}

happyBirthday("AsyaIrem");


function tekCift(number){
    if(number % 2 === 0){
        console.log(`${number} cift bir sayidir.`);

    }
    else
        console.log(`${number} tek bir sayidir.`);
}


tekCift("21");