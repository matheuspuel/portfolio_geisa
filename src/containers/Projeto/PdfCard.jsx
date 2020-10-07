import React from 'react';
import useStyles from "../../styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import pdfLogo from "assets/pdf.png";

function PdfCard({filename}) {
  const classes = useStyles();
  // const file = require(`assets/${filename}`)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={pdfLogo}
        />
        <CardContent className={classes.cardContent}>
          <Typography>Projeto completo</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Baixar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PdfCard;