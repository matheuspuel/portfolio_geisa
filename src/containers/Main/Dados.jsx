import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";

function Dados(props) {
  const classes = useStyles();
  return (
    <div className={classes.dados}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" color="textPrimary" gutterBottom className={classes.nome}>
          Geisa Marques
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.profissao}>
          Engenheira Civil<br/>
          CREA/SC: 176404-1
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.servicos}>
          PROJETOS ESTRUTURAIS EM CONCRETO ARMADO MOLDADO IN-LOCO<br/>
          BIM com software Eberick da AltoQi
        </Typography>
        {/*<Typography variant="h6" align="center" color="textSecondary" paragraph>*/}
        {/*  X anos de experiência no mercado*/}
        {/*</Typography>*/}
      </Container>
    </div>
  );
}

export default Dados;