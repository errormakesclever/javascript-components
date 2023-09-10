//Selecting an element
var closenav=document.getElementById("closenav")
var menubar=document.getElementById("menubar")
var sidenav=document.querySelector(".sidenav")



menubar.addEventListener("click",function(){
    sidenav.style.left="0px"
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-40%"
})