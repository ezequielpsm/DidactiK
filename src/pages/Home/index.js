import React from 'react';
import './index.css';

export default function Home() {
  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li className="active">Início</li>
          <li>Meus materiais</li>
          <li>Minhas aulas</li>
          <li>Turmas</li>
          <li>Comunidade</li>
          <li className="link">Convide um amigo</li>
          <li className="link">Treinamentos e recursos</li>
        </ul>
      </aside>

      <main className="main">
        <header className="header">
          <p><strong>Bem-vindo, Ezequiel Pacheco!</strong></p>
        </header>

        <section className="content">
          <h2>Criar materiais</h2>
          <div className="tools">
            <div className="tool">Plano de Aula</div>
            <div className="tool">Mapa Mental</div>
            <div className="tool">Corretor de Redação</div>
            <div className="tool">Relatório</div>
            <div className="tool">Resumo</div>
            <div className="tool">Slides</div>
          </div>

          <h2>Aulas sugeridas</h2>
          <div className="suggestion-card">
            <h3>Crie sua primeira aula</h3>
            <p>Materiais de qualidade prontos para você usar e orientações pedagógicas</p>
          </div>
        </section>
      </main>
    </div>
  );
}
