import React from 'react';

function Contato(props) {
  return (
    <div>
      <div>Entre em contato para fazer um orçamento</div>
      <div>Contato:</div>
      <div>E-mail: <a href="mailto: geisamarques1995@gmail.com">geisamarques1995@gmail.com</a></div>
      <div>
        Telefone/Whatsapp:{' '}
        <a href='https://api.whatsapp.com/send?phone=5548999127098' target="_blank" rel='noopener noreferrer'>
          (48) 99912-7098
        </a>
      </div>
    </div>
  );
}

export default Contato;