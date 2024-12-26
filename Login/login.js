const inputU = document.getElementById("username");
const inputP = document.getElementById("password");
const button = document.getElementById("button");
const tryagain = document.getElementById("tryagain");
let username;
let password; 

button.onclick = function() {
    if(username == inputU.value && password == inputP.value) {
        window.alert("Logged in successfully!");
        /*
        fetch stored value from db and compare if true proceed to a page with tasks to be performed
        */
    }
    else{
        window.alert("Invalid Credentials please try again!")
    }
}