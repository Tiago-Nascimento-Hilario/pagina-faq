import './index.css';

interface dadosTitulo {
    titulo:string
}

export const Titulo = (props:dadosTitulo) =>{
    return(
        <h1>{props.titulo}</h1>
    );
}