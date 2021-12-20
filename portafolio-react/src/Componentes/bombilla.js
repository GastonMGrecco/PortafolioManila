import React from 'react';
import {useState} from 'react';

const Bombilla = () => {
    const[estaPrendido, setEstaPrendido]=useState(false);

    const prendido=()=>setEstaPrendido(!estaPrendido);
  
    return (
        <div>
        <div id="bombilla"
        style={{
            backgroundColor: estaPrendido? "grey":"orange",
            boxShadow: estaPrendido? "none":"10px 10px 10px 10px yellow"
        }} ></div>
        <button onClick={prendido}>{estaPrendido ? 'prender':'apagar'}</button>
        </div>
    );
};

export default Bombilla;