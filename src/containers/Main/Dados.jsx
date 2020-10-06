import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "styles";

function Dados(props) {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Eng. Civil Geisa Marques
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          CREA/SC: XXXXXXX
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Projetos estruturais em concreto armado moldado in-loco
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          X anos de experiência no mercado
        </Typography>
      </Container>
    </div>
  );
}

export default Dados;