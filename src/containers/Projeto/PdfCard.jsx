import React from 'react';
import useStyles from "styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {checkMobile} from "utils/checkDevice";
import {ASSETS_ROOT_URL} from "resources/Constansts";

const pdfLogo = `${ASSETS_ROOT_URL}/pdf`

function PdfCard({url}) {
  const classes = useStyles();
  const isMobile = checkMobile();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={pdfLogo}
          component='a'
          href={url}
          target={!isMobile && '_blank'}
        />
        <CardContent className={classes.cardContent}>
          <Typography>Projeto completo</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component='a'
            href={url}
            target={!isMobile && '_blank'}
          >
            {isMobile ? 'Baixar Arquivo' : 'Abrir Arquivo'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PdfCard;