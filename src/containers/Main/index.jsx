import React from 'react';
import Nav from "./Nav";
import Dados from "./Dados";
import Contato from "./Contato";
import {Portfolio} from "containers";

function Main(props) {
  return (
    <>
      <Nav/>
      <Dados/>
      <Portfolio/>
      <Contato/>
    </>
  );
}

export default Main;