import React from 'react';
import Projeto from "./Projeto";

function Portfolio(props) {
  return (
    <div>
      <Projeto nome='Prédio A' area={800} andares={4} apartamentos={16}/>
      <Projeto nome='Casa B' area={200} andares={2}/>
      <Projeto nome='Casa C' area={100} andares={1}/>
      <Projeto nome='Casa D' area={70}/>
    </div>
  );
}

export default Portfolio;