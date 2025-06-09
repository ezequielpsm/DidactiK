import React, { useState } from 'react'; // <- importa useState corretamente
import './index.css';
import LessonPlanForm from './LessonPlanForm'; // <- caminho correto para o componente

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <aside className="sidebar">
        {/* ... seu aside */}
      </aside>

      <main className="main">
        <header className="header">
          <p><strong>Bem-vindo, Ezequiel Pacheco!</strong></p>
        </header>

        <section className="content">
          <h2>Criar materiais</h2>
          <div className="tools">
            <div className="tool" onClick={() => setShowModal(true)}>Plano de Aula</div>
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

      {/* Aqui entra o modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
            <LessonPlanForm />
          </div>
        </div>
      )}
    </div>
  );
}
