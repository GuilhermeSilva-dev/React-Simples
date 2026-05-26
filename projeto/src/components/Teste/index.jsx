import { useState } from 'react'
import './style.css'

export default function Amor() {
    const [paixao, setPaixao] = useState('Isso aqui é especialmente para ti')
    const [tempoJuntos, setTempoJuntos] = useState ('4 anos, 3 meses e 6 dias')
    const [mensagemDeAmor, setMensagemDeAmor] = useState('Amor estou sem tempo para falar muita coisa, mas eu te amo muitooo e nunca vou me arrepender do que ja passamos juntos')

    return (
        <div className='amoreco'>
            <h3>Dados do curso:</h3>
            <p>Nome: { nome } </p>
            <p>Tempo Juntos: { tempoJuntos } </p>
            <p>Mensagem de amor: { mensagemDeAmor } </p>
        </div>
    )
    
            
}