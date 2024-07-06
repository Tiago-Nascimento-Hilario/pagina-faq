import './App.css';
import { Post } from './components/Post';
import { Pergunta } from './components/Pergunta';
import { Titulo } from './components/Titulo';


function App() {

  return (
    <div className="painel">
      <Post />
      <div className='container-perguntas'>
        <Titulo titulo='Dúvidas!' />
        <div className='segundo-container'>
          <Pergunta pergunta='O que é HTML?' resposta='HTML é a linguagem de marcação usada para estruturar e apresentar conteúdo na web.' />
        </div>
        <div className='segundo-container'>
          <Pergunta pergunta='Para que serve o CSS?' resposta='CSS é usado para estilizar e formatar o layout de páginas web, controlando cores, fontes e disposição.' />
        </div>
        <div className='segundo-container'>
          <Pergunta pergunta='O que é JavaScript?' resposta='JavaScript é uma linguagem de programação que permite adicionar interatividade e funcionalidades dinâmicas às páginas web.' />
        </div>
        <div className='segundo-container'>
          <Pergunta pergunta='Qual a função do ReactJS?' resposta='ReactJS é uma biblioteca JavaScript usada para construir interfaces de usuário baseadas em componentes reutilizáveis.' />
        </div>
        <div className='segundo-container'>
          <Pergunta pergunta='O que é o DOM?' resposta='O DOM (Document Object Model) é uma interface de programação que permite a manipulação de elementos HTML e CSS de uma página web.' />
        </div>
      </div>
    </div>
  )
}

export default App
