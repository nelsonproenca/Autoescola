import React, { Fragment } from "react";

const NovaTurma = () => {
  return (
    <div className="nova-turma">
      <input type="text" className="nova-turma__input" value="Nome da Turma" />
      <button className="nova-turma__button">Cancelar</button>
      <button className="nova-turma__button">Adicionar</button>
    </div>
  );
};

export default NovaTurma;
