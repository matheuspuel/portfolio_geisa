import React from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";
import Link from "@material-ui/core/Link";
import {EmailOutlined, Phone, WhatsApp} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";


function Contato(props) {
  const classes = useStyles();
  return (
    <div id='contato' className={classes.contato}>
      <Typography variant="h6" align="center" gutterBottom>
        Entre em contato para fazer um orçamento
      </Typography>

      <Grid container alignItems="center" justify='center' direction="row">
        <EmailOutlined />
        <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
          <Link
            color="textPrimary"
            href='mailto: geisamarques1995@gmail.com'
            className={classes.link}
          >
            geisamarques1995@gmail.com
          </Link>
        </Typography>
      </Grid>

      <Grid container alignItems="center" justify='center' direction="row">
        <Phone/>
        <WhatsApp/>
        <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
          <Link
            color="textPrimary"
            href='https://api.whatsapp.com/send?phone=5548999127098'
            target="_blank"
            rel='noopener noreferrer'
            className={classes.link}
          >
            (48) 99912-7098
          </Link>
        </Typography>
      </Grid>

    </div>
  );
}

export default Contato;