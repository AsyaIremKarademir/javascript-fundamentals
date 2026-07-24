//while loop

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Please try again");
    }
}

//while kosul dogru oldugu surece calisir. 
//do while ise once calistirir sonra kosulu kontrol eder. yani en az bir kere calisir.