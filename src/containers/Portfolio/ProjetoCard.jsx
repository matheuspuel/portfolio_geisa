import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useStyles from "styles";

function ProjetoCard({id, nome, area, andares, apartamentos, capa}) {
  const classes = useStyles();
  const imagem = require(`assets/${capa}`)
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imagem}
          title={nome}
          component={Link}
          to={`/projeto/${id}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">{nome}</Typography>
          <Typography>{area} m²</Typography>
          <Typography>{andares && (andares === 1 ? '1 andar' : `${andares} andares`)}</Typography>
          <Typography>{apartamentos && `${apartamentos} apartamentos`}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={`/projeto/${id}`}>
            Ver
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjetoCard;