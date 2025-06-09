import React from 'react';

const LessonPlanForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Plano de Aula</h1>
      <p className="mb-6 text-gray-600">Gere planos completos com objetivos, metodologia, recursos e avaliação.</p>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Assunto <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Tema da aula" className="w-full mt-1 p-2 border rounded-md" required />
        </div>

        <div>
          <label className="block font-medium">Base Nacional Comum Curricular (BNCC) <span className="text-sm text-gray-500">(Opcional)</span></label>
          <input type="text" placeholder="Buscar: Base Nacional Comum Curricular (BNCC)" className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block font-medium">Ano de escolaridade <span className="text-sm text-gray-500">(Opcional)</span></label>
          <input type="text" placeholder="4º ano, 2º ano do ensino médio" className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block font-medium">Metodologia da aula <span className="text-sm text-gray-500">(Opcional)</span></label>
          <input type="text" placeholder="Escolha a metodologia" className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block font-medium">Disciplina <span className="text-sm text-gray-500">(Opcional)</span></label>
          <input type="text" placeholder="Nome da disciplina" className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div>
          <label className="block font-medium">Contexto <span className="text-sm text-gray-500">(Opcional)</span></label>
          <textarea placeholder="O que preciso saber sobre o contexto da aula? Descreva apenas o que achar necessário" className="w-full mt-1 p-2 border rounded-md" rows="4"></textarea>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default LessonPlanForm;
