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
      <Container id='portfolio' className={classes.cardGrid} maxWidth="md">
        <Typography variant="h4" align="center" color="textPrimary" className={classes.cardGridTitle}>
          Portfólio
        </Typography>
        <Typography align="center" color="textPrimary" className={classes.ferramentas}>
          Os projetos são produzidos com o software Eberick da AltoQi, com suporte ao conceito BIM
        </Typography>
        <Grid container spacing={4}>
          {projetos.map(projeto => {
            return <ProjetoCard
              key={projeto.id}
              projeto={projeto}
            />
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;