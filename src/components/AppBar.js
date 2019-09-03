import React from "react";
import { withRouter } from "react-router-dom";

const AppBar = ({ history }) => (
  <div className="app-bar">
    <div className="app-bar__container">
      <i className="material-icons">drive_eta</i>
      <span className="app-bar__brand">Auto Escola Senna.</span>
      <button
        className="app-bar__action"
        onClick={() => {
          history.push("/");
        }}
      >
        <i className="material-icons">home</i>
        <br />
        Home
      </button>
      <button
        className="app-bar__action"
        onClick={() => {
          history.push("/alunos");
        }}
      >
        <i className="material-icons">face</i>
        <br />
        Alunos
      </button>
      <button
        className="app-bar__action"
        onClick={() => {
          history.push("/aulas");
        }}
      >
        <i className="material-icons">group</i>
        <br />
        Aulas
      </button>
      <button
        className="app-bar__action"
        onClick={() => {
          history.push("/montar");
        }}
      >
        <i className="material-icons">list</i>
        <br />
        Montar Turmas
      </button>
    </div>
  </div>
);

export default withRouter(AppBar);
