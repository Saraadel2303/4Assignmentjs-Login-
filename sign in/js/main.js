let login = document.getElementById("login")
let signinemail = document.getElementById("signinemail")
let signinpass = document.getElementById("signinpass")

let allInputAlert = document.getElementById("allInputAlert")
let incorrectAlertt = document.getElementById("incorrectAlert")

let allUsers=[];

if(localStorage.getItem("allUsers")!=null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}


login.addEventListener("submit", function(e){
e.preventDefault();

signin();
allInputIsRequired()

})

function allInputIsRequired(){
    
    if(!signinemail.value.trim()||!signinpass.value.trim()){
        allInputAlert.classList.replace("d-none" , "d-block")
        incorrectAlertt.classList.replace("d-block" , "d-none")
    }
}


function signin(){
    let usersData={
        email: signinemail.value,
        password: signinpass.value
    };
      
    if(isLoginValid(usersData)==true){
        setTimeout(function(){
            window.location.href="../welcome/index.html"
     } , 2000)
    }else{
        incorrectAlertt.classList.replace("d-none" , "d-block")
        allInputAlert.classList.replace("d-block" , "d-none")
    }
}

function isLoginValid(usersData){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase() == usersData.email.toLowerCase() &&
        allUsers[i].password.toLowerCase() == usersData.password.toLowerCase() ){
              localStorage.setItem("userName" , allUsers[i].name);
              return true;
        }
    }
}