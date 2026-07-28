// spread -> objeyi ya da diziyi yay.

const user =['tayfun', 'asya', 'ece']

function getName(name1, name2, name3){
    console.log(name1)
    console.log(name2)
    console.log(name3)
}

getName(user[0], user[1], user[2]) //spread kullanmadan elle tek tek yazmam gerekir ve büyük projelerde kaça kadar böyle yazılabilir ki..

getName(...user) //spreadde üç noktayla bu sorunun önüne geçilir.

//rest

const user1 =['tayfun', 'asya', 'ece', 'ali', 'mehmet', 'irem', 'selin', 'duru']

function getName1(name1, name2, ...otherNames) {
    console.log(name1)
    console.log(name2)
    console.log(otherNames)
}

getName1(...user1)