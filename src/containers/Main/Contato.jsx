import React from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";

function Contato(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Entre em contato para fazer um orçamento
      </Typography>
      <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
        E-mail: <a href="mailto: geisamarques1995@gmail.com">geisamarques1995@gmail.com</a>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
        Telefone/Whatsapp:{' '}
        <a href='https://api.whatsapp.com/send?phone=5548999127098' target="_blank" rel='noopener noreferrer'>
          (48) 99912-7098
        </a>
      </Typography>
    </div>
  );
}

export default Contato;