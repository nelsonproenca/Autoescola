import React from "react";

const AlumoTurma = () => {
  return (
    <div className="aluno-turma">
      <div className="aluno-turma__info">
        <span className="aluno-turma__info--span">Nome do Aluno</span>
        <i className="material-icons">check</i>
      </div>
      <button className="aluno-turma__button">Excluir Aluno</button>
      <button className="aluno-turma__button">Incluir Aluno</button>
    </div>
  );
};

export default AlumoTurma;
