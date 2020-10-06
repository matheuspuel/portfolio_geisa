import React from 'react';
import './App.css';
import {Main, Projeto} from "containers";
import {BrowserRouter, Redirect} from "react-router-dom";
import {Route, Switch} from "react-router";

function App() {
  return (
    <div style={{marginLeft:'10px'}}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/projeto/' component={Projeto} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
