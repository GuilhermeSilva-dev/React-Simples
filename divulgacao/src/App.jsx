import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  const mostrarMensagemSurpresa = () => {
    alert('Obrigado por sempre estar comigo em todos os momentos e por me apoiar em cada passo! Eu te amo muito (2235) ❤️, perdão por ser tão ruim em expressar meus sentimentos, mas saiba que você é a melhor coisa que já aconteceu na minha vida e que sou muito grato por ter você ao meu lado. Virão dias melhores, e eu prometo  continuar fazendo o meu melhor para te fazer feliz todos os dias. Te amo!');
  };

  return (
    <div>
      <Header />

      <main className="conteudo-principal">
        
        {/* Seção de Entrada / Banner */}
        <section className="banner-principal">
          <h2>Para a pessoa mais especial dos meus dias</h2>
          <p className="texto-descricao">
            Decidi usar o que estou aprendendo no curso para criar um espaço único e nosso para agradecer por todos os momentos que compartilhamos juntos.
          </p>
          <button 
            className="botao-surpresa"
            onClick={mostrarMensagemSurpresa}
          >
            Clique para ver a surpresa ✨
          </button>
        </section>

        {/* Linha do Tempo / Mural */}
        <section className="cartao-mural">
          <h3>Mural de Pequenos Grandes Momentos Juntos</h3>
          <ul className="lista-momentos">
            <li>
              <strong>Como tudo começou...</strong>
              O início de uma conversa que se transformou na melhor parte do meu dia. Quem diria que eu namoraria uma estranha do Cobalto
            </li>
            <li>
              <strong>As risadas e a parceria...</strong>
              Obrigado por ser minha conselheira, por me ouvir falando muita merda, e por me fazer rir mesmo em dias dificéis, sempre me dando forças para continuar.
            </li>
            <li>
              <strong>O que mais admiro em você...</strong>
              Seu jeito único de ser, sua loucura, estresse, e amor que você traz para o meu coração nos dias mais cheios e vazios.
            </li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;