import React from 'react';
import {Link} from "react-router-dom";

function Projeto({id, nome, area, andares, apartamentos}) {
  const imagem = require(`assets/abertura_${id}.png`)
  return (
    <div>
      <div><Link to={`/projeto/${id}`}><img src={imagem} alt="" width={150}/></Link></div>
      <div>{nome}</div>
      <div>{area} m²</div>
      <div>{andares && (andares === 1 ? '1 andar' : `${andares} andares`)}</div>
      <div>{apartamentos && `${apartamentos} apartamentos`}</div>
    </div>
  );
}

export default Projeto;