import React from 'react';
import {HashLink} from "react-router-hash-link";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useStyles from "styles";

const BULLET = '\u2022'

const getTipoText = (tipo) => {
  switch (tipo){
    case 'RU':
      return 'Residencial Unifamiliar'
    case 'RM':
      return 'Residencial Multifamiliar'
    case 'M':
      return 'Edificação Mista'
    case 'C':
      return 'Edificação Comercial'
    case 'I':
      return 'Edificação Industrial'
    default:
      return ''
  }
}

function ProjetoCard({projeto}) {
  const {id, nome, tipo, cidade, area, pavimentos, apartamentos, folder, capa} = projeto;
  const classes = useStyles();
  const imagem = require(`assets/${folder}/${capa}`)
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imagem}
          title={nome}
          component={HashLink}
          to={`/projeto/${id}#projeto`}
        />
        <CardContent className={classes.cardContent}>
          {/*<Typography gutterBottom variant="h5" component="h2">{nome}</Typography>*/}
          <Typography>{BULLET} {getTipoText(tipo)}</Typography>
          <Typography>{BULLET} {cidade}</Typography>
          <Typography>{BULLET} {area.toFixed(2).replace('.',',')} m²</Typography>
          <Typography>{BULLET} {pavimentos && (pavimentos === 1 ? 'Térreo' : `${pavimentos} pavimentos`)}</Typography>
          <Typography>{apartamentos && `${BULLET} ${apartamentos} apartamentos`}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={HashLink} to={`/projeto/${id}#projeto`}>
            Ver Projeto
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjetoCard;