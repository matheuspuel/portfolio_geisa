import React from 'react';
import ProjetoCard from "./ProjetoCard";
import projetos from 'resources/projetos/projetos.json'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "styles";
import Typography from "@material-ui/core/Typography";

function Portfolio(props) {
  const classes = useStyles();
  return (
    <>
      <Typography id={'portfolio'} variant="h4" align="center" color="textPrimary" className={classes.cardGridTitle}>
        Portfólio
      </Typography>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {projetos.map(({id, nome, area, andares, apartamentos, imagem}) => {
            return <ProjetoCard
              key={id}
              id={id}
              nome={nome}
              area={area}
              andares={andares}
              apartamentos={apartamentos}
              imagem={imagem}
            />
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;