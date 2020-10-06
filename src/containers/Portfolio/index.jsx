import React from 'react';
import Projeto from "./Projeto";
import projetos from 'resources/projetos/projetos.json'

function Portfolio(props) {
  return (
    <div>
      {projetos.map(({id, nome, area, andares, apartamentos, imagem}) => {
        return <Projeto key={id} id={id} nome={nome} area={area} andares={andares} apartamentos={apartamentos} imagem={imagem}/>
      })}
    </div>
  );
}

export default Portfolio;