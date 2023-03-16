let a;
let date;
let time;
let option;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


function clock(){
a=new Date();
date=a.toLocaleDateString(undefined,options);
time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
document.getElementById("time").innerHTML = time +"<br>"+" on "+ date
}

setInterval(clock,1000);

function open(){
    
     option=document.getElementById("options");

    if(option.style.display==="none"){
        option.style.display="block";
    }
    else{option.style.display="none";}
}

 let button=document.getElementById("btn");
 button.addEventListener("click",open());




