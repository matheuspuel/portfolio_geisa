import React from 'react';

function Projeto({nome, area, andares, apartamentos}) {
  return (
    <div>
      <div>{nome}</div>
      <div>{area} m²</div>
      <div>{andares && (andares === 1 ? '1 andar' : `${andares} andares`)}</div>
      <div>{apartamentos && `${apartamentos} apartamentos`}</div>
    </div>
  );
}

export default Projeto;