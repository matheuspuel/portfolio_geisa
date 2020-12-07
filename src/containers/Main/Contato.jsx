import React from 'react';
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";
import MuiLink from "@material-ui/core/Link";
// import {Link} from "react-router-dom";
import {EmailOutlined, Phone, WhatsApp} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const email = 'eng.geisamarques@gmail.com';
const phone = '(48) 99912-7098';
const phoneClean = '5548999127098';

function Contato(props) {
  const classes = useStyles();
  return (
    <div id='contato' className={classes.contato}>
      <Typography variant="h6" align="center" gutterBottom>
        Entre em contato para fazer um orçamento
      </Typography>

      <Grid container alignItems="center" justify='center' direction="row">
        <MuiLink
          color="inherit"
          href={`mailto: ${email}`}
        >
          <EmailOutlined/>
        </MuiLink>
        <Typography variant="subtitle1" align="center" color="inherit" component="p">
          <MuiLink
            color="inherit"
            href={`mailto: ${email}`}
            className={classes.link}
          >
            {email}
          </MuiLink>
        </Typography>
      </Grid>

      <Grid container alignItems="center" justify='center' direction="row">
        <Phone/>
        <MuiLink
          color="inherit"
          href={`https://api.whatsapp.com/send?phone=${phoneClean}`}
          target="_blank"
          rel='noopener noreferrer'
        >
          <WhatsApp/>
        </MuiLink>
        <Typography variant="subtitle1" align="center" component="p" color="inherit">
          <MuiLink
            color="inherit"
            href={`https://api.whatsapp.com/send?phone=${phoneClean}`}
            target="_blank"
            rel='noopener noreferrer'
            className={classes.link}
          >
            {phone}
          </MuiLink>
        </Typography>
      </Grid>

    </div>
  );
}

export default Contato;