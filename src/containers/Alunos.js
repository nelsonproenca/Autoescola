import React, { Fragment } from "react";

import NovoAluno from "../components/NovoAluno";
import ListaAlunos from "../components/ListaAlunos";

const Alunos = () => {
  return (
    <Fragment>
      <NovoAluno />
      <ListaAlunos />
    </Fragment>
  );
};

export default Alunos;
