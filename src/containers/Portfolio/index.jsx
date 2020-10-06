import React from 'react';
import Projeto from "./Projeto";
import projetos from 'resources/projetos/projetos.json'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "styles";

function Portfolio(props) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {projetos.map(({id, nome, area, andares, apartamentos, imagem}) => {
          return <Projeto
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
  );
}

export default Portfolio;