import React from "react";

const Inicial = () => {
  return (
    <div className="home">
      <div className="home__servicos">
        <span className="home__servicos--titulo">Serviços</span>
        <hr className="home__servicos--barra" />
        <button className="home__servicos--button">
          <i className="material-icons">edit</i>
          <span>Aula Teórica</span>
        </button>
      </div>
      <div className="home__servicos">
        <span className="home__servicos--titulo">Cadastros</span>
        <hr />
        <button className="home__servicos--button">
          <i className="material-icons">face</i>
          <br />
          <span>Alunos</span>
        </button>
      </div>
    </div>
  );
};

export default Inicial;
