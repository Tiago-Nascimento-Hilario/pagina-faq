
import { useState } from 'react';
import './index.css';

interface Dados {
    pergunta: string;
    resposta: string;    
}

export const Pergunta = (props: Dados) => {

    const [styleResposta, setStyleResposta] = useState('resposta');

    function handleExibir(){
        setStyleResposta('teste');
    }
    function handleEsconder(){
        setStyleResposta('resposta')
    }

    return (
        <>
            <div>
                <p className='pergunta' onClick={handleExibir}>{props.pergunta}</p>
                <p className={styleResposta}>{props.resposta} <span onClick={handleEsconder}>x</span></p>
            </div>
        </>
    )
}