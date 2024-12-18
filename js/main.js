
function changeColor(){
    var nav =document.querySelector(".navbar");
    var scrollvalue = window.scrollY;
    if(scrollvalue<300){
        nav.classList.remove('bgnavbar');
    }
    else{
        nav.classList.add('bgnavbar');
    }
}

window.addEventListener("scroll",changeColor);

function winopen(){
alert("hellow world");

}
 var time =setInterval(mytimer,1000);
 function mytimer(){
    var d= new Date();
    document.querySelector('#demo').innerHTML=d .toLocaleTimeString();
 }