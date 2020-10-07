import React from 'react';
import Nav from "./Nav";
import Dados from "./Dados";
import Contato from "./Contato";

function Main({children}) {
  return (
    <>
      <main>
        <Nav/>
        <Dados/>
        {children}
        <Contato/>
      </main>
    </>
  );
}

export default Main;