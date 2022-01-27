import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'

import ComParametro from './componentes/basicos/ComParametro'

import Fragmento from './componentes/basicos/Fragmento'

export default function App(props){
    return(
    <div><strong>Olá React!</strong>
    <Fragmento></Fragmento>
    <ComParametro 
    titulo="Segundo Componente" 
    subtitulo="Muito legal"
    aluno="Pedro" nota={9.3}></ComParametro>
    
    </div>
    )
}