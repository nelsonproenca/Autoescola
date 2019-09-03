import React, { Fragment } from "react";
import uuid from "uuid/v1";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Alunos from "./Alunos";
import Aulas from "./Aulas";
import MontaTurmas from "./MontaTurmas";

import AppBar from "../components/AppBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar />
          <div className="container">
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/alunos" component={Alunos} />
              <Route path="/aulas" component={Aulas} />
              <Route path="/montar" component={MontaTurmas} />
            </Fragment>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
