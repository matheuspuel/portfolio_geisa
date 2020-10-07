import React from 'react';
import useStyles from "../../styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import projetos from "../../resources/projetos/projetos.json";
import Button from "@material-ui/core/Button";
import ImagemCard from "./ImagemCard";
import {useParams} from "react-router";
import PdfCard from "./PdfCard";
import {Link} from "react-router-dom";

function Projeto(props) {
  let { id } = useParams();
  const classes = useStyles();
  const projeto = projetos.find(x => x.id === parseInt(id));
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container alignItems="baseline" direction="row">
          <Grid item xs={2}>
            <Button size="small" color="primary" component={Link} to={`/`}>
              Voltar
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" align="center" color="textPrimary" className={classes.cardGridTitle}>
              {projeto.nome}
            </Typography>
          </Grid>
          <span/>
        </Grid>
        <Grid container spacing={4}>
          {projeto.imagens.map((filename, index) => {
            return <ImagemCard
              key={index}
              filename={filename}
            />
          })}
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h6" align="center" color="textSecondary" className={classes.cardGridTitle}>
          Baixe o projeto completo em PDF
        </Typography>
        <Grid container spacing={4}>
          <PdfCard filename={projeto.projeto}/>
        </Grid>
      </Container>
    </>
  );
}

export default Projeto;