import React from "react";
import './App.css'

import Familia from "./componentes/basicos/Familia";
import Card from './componentes/layout/Card'
import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => (
    <div className="App">
        <h1>Fundamentos de React</h1>

        <div className="Cards">
            <Card titulo=" #05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"></Familia>
            </Card>
            <Card titulo=" #04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>
            <Card titulo=" #03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo=" #02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro Silva"
                nota={9.3}/>
            </Card>
            <Card titulo=" #01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
            
        </div>

    </div>
    
)
