import React from "react";

const Turma = () => {
  return (
    <div className="turma">
      <div className="turma__span">
        <label className="turma__span--linha1">Turma X</label>
        <br />
        <span className="turma__span--linha2">Nenhum Aluno</span>
      </div>
      <button className="turma__button">Alunos</button>
      <button className="turma__button">Editar</button>
      <button className="turma__button">Excluir</button>
    </div>
  );
};

export default Turma;
