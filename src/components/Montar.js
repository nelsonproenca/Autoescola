import React, { Fragment } from "react";

import AlumoTurma from "./AlunoTurma";

const Montar = () => {
  return (
    <div className="montar">
      <span className="montar__titulo">Turma X</span>
      <hr />
      <AlumoTurma />
      <AlumoTurma />
      <AlumoTurma />
      <AlumoTurma />
    </div>
  );
};

export default Montar;
