import React from 'react';
import quotes from '../quotes.json'
import {useState} from 'react';



const Quotebox = () => {
    const colorArreglo =[
        "#FF9671",
        "#845EC2",
        "#0089BA",
        "#008F7A",
        "#4D8076",
        "#4B4453",
        "#C34A36",
        "#FF8066",
        "#4FFBDF"
    ]
    let indiceColor1=Math.floor(Math.random()*colorArreglo.length)


const [frase,setFrase]=useState(quotes[0].quote)
const [autor,setAutor]=useState(quotes[0].author);
const [color,setColor]=useState(colorArreglo[indiceColor1])


const cambiarEstado=()=>{
    let indice= Math.floor(Math.random()*quotes.length)
    let indiceColor=Math.floor(Math.random()*colorArreglo.length)
    console.log(indice);
    setFrase(quotes[indice].quote);
    setAutor(quotes[indice].author);
    setColor(colorArreglo[indiceColor]);
};


    return (
        <div className='fondo' style={{backgroundColor:color}}>
            <div className='tarjeta'>
                <i className='fas fa-quote-left' style={{color:color}}></i>
                <h2 style={{color:color}}>{frase}</h2>
                <p style={{color:color}}>{autor}</p>
                <button className='boton'onClick={cambiarEstado}style={{backgroundColor:color}}> <i className="fas fa-greater-than"></i></button>
            </div>
        </div>
    );
};

export default Quotebox;