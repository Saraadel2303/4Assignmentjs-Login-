let welcomeMsg=document.getElementById("welcomeMsg")

window.addEventListener("load" , function(){
    displayWelcome()
});

function displayWelcome(){
    welcomeMsg.innerHTML=`Welcome ${localStorage.getItem("userName")}`
}