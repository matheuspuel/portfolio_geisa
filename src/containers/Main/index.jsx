import React from 'react';
import Nav from "./Nav";
import Dados from "./Dados";
import Contato from "./Contato";
import Portfolio from "./Portfolio";
import CssBaseline from "@material-ui/core/CssBaseline";

function Main(props) {
  return (
    <>
      <CssBaseline />
      <main>
        <Nav/>
        <Dados/>
        <Portfolio/>
        <Contato/>
      </main>
    </>
  );
}

export default Main;