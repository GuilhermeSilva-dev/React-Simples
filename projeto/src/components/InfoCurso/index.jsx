import { useState } from 'react'
import './style.css'

export default function InfoCursos() {
    const[nome, setNome] = useState('Lógica de progamação')
    const[cargaHoraria, setCargaHoraria] = useState(162)
    const[dataInicio, setDataInicio] = useState('03/02/2025')
    const[dataTermino, setDataTermino] = useState('18/12/2026')
    const[docente, setDocente] = useState('Carlos Anderson')
    const[aluno, setAluno] = useState('Guilherme Silva')
 
    return (
        <div className='info-curso'>
            <h2>Dados do curso:</h2>
            <p>Nome: { nome } </p>
            <p>Carga Horária: { cargaHoraria } </p>
            <p>Data de início: { dataInicio } </p>
            <p>Data de término: { dataTermino } </p>
            <p>Docente : { docente } </p>
            <p>Aluno : { aluno } </p>


        </div>

        
    )

    
}