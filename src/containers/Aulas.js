import React, { Fragment } from "react";

import NovaTurma from "../components/NovaTurma";
import ListaTurmas from "../components/ListaTurmas";

const Aulas = () => (
  <div className="turmas">
    <span className="turmas__titulo">Aula Teórica</span>
    <hr />
    <Fragment>
      <NovaTurma />
      <ListaTurmas />
    </Fragment>
  </div>
);

export default Aulas;
