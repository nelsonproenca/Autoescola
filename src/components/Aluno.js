import React from "react";

const Aluno = () => {
  return (
    <div className="aluno">
      <input type="text" className="aluno__input" value="Nome do Aluno." />
      <button className="aluno__button">Editar</button>
      <button className="aluno__button">Excluir</button>
    </div>
  );
};

export default Aluno;
