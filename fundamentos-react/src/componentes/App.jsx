import React from "react";

import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => (
    <div id="app">
        <h1>Fundamentos de React</h1>
        <Aleatorio min={1} max={60}></Aleatorio>
        <Fragmento />
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Pedro Silva"
            nota={9.3}/>
        <Primeiro></Primeiro>
    
    </div>
    
)
