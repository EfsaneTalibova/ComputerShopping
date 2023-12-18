let loginBtnInHomePage = document.getElementById("loginBtnInHomePage")
let myComputersBtnInHomePage = document.getElementById("myComputersBtnInHomePage")
let logoutBtnInHomePage = document.getElementById("logoutBtnInHomePage")
let homePageUserName= document.getElementById("homePageUserName")
if(localStorage.getItem("user")){
    loginBtnInHomePage.classList.add("hideElement")
    homePageUserName.innerText = localStorage.getItem("user")
}
else{
    myComputersBtnInHomePage.classList.add("hideElement")
    logoutBtnInHomePage.classList.add("hideElement")
}
logoutBtnInHomePage.addEventListener("click",()=>{
    localStorage.removeItem("user")
})
