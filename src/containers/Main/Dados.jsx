import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";

function Dados(props) {
  const classes = useStyles();
  return (
    <div className={classes.dados}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Eng. Civil Geisa Marques
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          CREA/SC: 176404-1
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Projetos estruturais em concreto armado moldado in-loco
        </Typography>
        {/*<Typography variant="h6" align="center" color="textSecondary" paragraph>*/}
        {/*  X anos de experiência no mercado*/}
        {/*</Typography>*/}
      </Container>
    </div>
  );
}

export default Dados;