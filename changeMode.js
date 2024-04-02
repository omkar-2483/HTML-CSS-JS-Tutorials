let modeBtn=document.querySelector("#mode");
let currentMode="light";
let body=document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currentMode==="dark"){
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }else{
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
})