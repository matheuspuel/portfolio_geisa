import React from 'react';
import {Link} from "react-router-dom";

function Projeto({id}) {
  return (
    <div>
      <div><Link to='/'>Voltar</Link></div>
      <div>
        id: {id}
      </div>
    </div>
  );
}

export default Projeto;