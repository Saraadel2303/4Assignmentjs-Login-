let signForm = document.getElementById("signForm")
let signupname = document.getElementById("signupname")
let signupemail = document.getElementById("signupemail")
let signuppass = document.getElementById("signuppass")

let nameAlert = document.getElementById("nameAlert")
let emailAlert = document.getElementById("emailAlert")
let passAlert = document.getElementById("passAlert")

let suceesAlert = document.getElementById("suceesAlert")
let allInputAlert = document.getElementById("allInputAlert")
let existAlert = document.getElementById("existAlert")

let allUsers=[]

if(localStorage.getItem("allUsers")!=null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}


signForm.addEventListener("submit" , function(e){
    e.preventDefault();
    allInputIsRequired()
    if(checkAllValidInput()){
        addUser()
    }

})


function allInputIsRequired(){
    
    if(!signupname.value.trim()||!signupemail.value.trim()||!signuppass.value.trim()){
        allInputAlert.classList.replace("d-none" , "d-block")
    }
}


function addUser(){
    let newUser={
        name:signupname.value,
        email:signupemail.value,
        password:signuppass.value
    };
    if(isExist(newUser)==true){
        existAlert.classList.replace("d-none" , "d-block")
        suceesAlert.classList.replace("d-block" , "d-none")
        allInputAlert.classList.replace("d-block" , "d-none")
    }else{
        allUsers.push(newUser)
        localStorage.setItem("allUsers" , JSON.stringify(allUsers))
        suceesAlert.classList.replace("d-none" , "d-block")
        allInputAlert.classList.replace("d-block" , "d-none")
        existAlert.classList.replace("d-block" , "d-none")
        
        setTimeout(function(){
               window.location.href="../index.html"
        } , 2000)
        
    }
}



function isExist(newUser){
    for (let i = 0; i < allUsers.length; i++) {

        if(allUsers[i].email.toLowerCase() == newUser.email.toLowerCase() ){
            return true;
        }
        
        
    }
}


function validInput(regex , element , alert){
    let pattern = regex
   if(pattern.test(element.value)==true){
    alert.classList.replace("d-block" , "d-none")
    return true;
   }else{
    alert.classList.replace("d-none" , "d-block")
    suceesAlert.classList.replace("d-block" , "d-none")
    return false;
   }
}

function checkAllValidInput(){
    if( validInput(/^[a-zA-Z]{2,}$/ , signupname , nameAlert) && 
    validInput(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/ , signupemail , emailAlert) && 
    validInput(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/ , signuppass , passAlert) ){
        return true;

    }else{
        return false;

    }
}


