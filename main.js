let butn=document.getElementById("btn1");
let inps=document.getElementById("inp");
let butElement=document.getElementById("btn2");
let row=document.querySelector(".row");
let col=document.querySelector(".col-1");
let col2=document.querySelector(".col")

butn.addEventListener("click", function(){
     inps.value = parseInt(inps.value)+1;
     col.style.opacity="1"; col.style.transition="all 2s";
})
butElement.addEventListener("click", function(){
    if(inps.value >0){
       inps.value = parseInt(inps.value)-1;
       col2.nextElementSibling.remove();
    }
})




