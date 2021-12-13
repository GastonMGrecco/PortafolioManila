"use strict"

//Variables
let boton= document.querySelector("button");

let imagen=document.querySelector("img");
let nombre=document.querySelector("h2");

 


//Funciones declaradas
function mostrarPokemon(dato){

imagen.src= dato.sprites.front_default;
nombre.textContent=dato.name;

}
function buscarPokemon(){
            let textoEntrada= document.querySelector("#texto").value;
            fetch("https://pokeapi.co/api/v2/pokemon/"+textoEntrada)
            .then(respuesta=>respuesta.json())
            .then(dato=>{dato; mostrarPokemon(dato);});
            let logos="https://pokeapi.co/api/v2/pokemon/"+textoEntrada;
            console.log(logos);
}


//Main
boton.addEventListener("click",()=> buscarPokemon());
