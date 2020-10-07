import React from 'react';
import useStyles from "../../styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

function ImagemCard({filename}) {
  const classes = useStyles();
  const imagem = require(`assets/${filename}`)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imagem}
        />
      </Card>
    </Grid>
  );
}

export default ImagemCard;