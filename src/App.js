import React from 'react';
import './App.css';
import {Main, Portfolio, Projeto} from "containers";
import {BrowserRouter, Redirect} from "react-router-dom";
import {Route, Switch} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Main>
            <Route path='/' exact component={Portfolio} />
            <Route path='/projeto/:id' children={<Projeto/>} />
            <Redirect to='/' />
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
