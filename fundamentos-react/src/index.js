import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'

import ComParametro from './componentes/basicos/ComParametro'

import Fragmento from './componentes/basicos/Fragmento'


const tag = <strong>Olá React</strong>

ReactDOM.render(
    <div><strong>Olá React!</strong>
    {tag}
    <Primeiro></Primeiro>
    <ComParametro 
    titulo="Segundo Componente" 
    subtitulo="Muito legal"
    aluno="Pedro" nota={9.3}></ComParametro>
     <ComParametro 
    titulo="Terceiro Componente" 
    subtitulo="Muito legal"
    aluno="Pedro" nota={9.9}></ComParametro>
    <Fragmento></Fragmento>
    
    </div>,
    document.getElementById('root')
)