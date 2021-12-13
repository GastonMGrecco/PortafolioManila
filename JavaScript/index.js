"use strict"
//variables
let yo=document.getElementById("yo");
let contador=0;
//main
/*yo.addEventListener("click",evento=>{
    contador++;
    let burbuja=document.getElementById("burbuja");
    console.log(burbuja);
    if(contador%2!==0){
        burbuja.style.visibility= "visible";
    }
    else{
        burbuja.style.visibility= "hidden";
    }
        

});*/
let estilo=window.getComputedStyle(yo,"hover");
let estiloElemento=estilo.getPropertyValue('width');
console.log(estiloElemento);
if(estiloElemento==="75px"){
    let burbuja=document.getElementById("burbuja");
    burbuja.style.visibility= "visible";
}