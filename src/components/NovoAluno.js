import React from "react";

const NovoAluno = () => {
  return (
    <div className="novo-aluno">
      <span className="novo-aluno__titulo">Alunos</span>
      <hr />
      <input type="text" className="novo-aluno__input" />
      <div className="novo-aluno__container">
        <button className="novo-aluno__container--button">Incluir aluno</button>
      </div>
    </div>
  );
};

export default NovoAluno;
