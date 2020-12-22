import React from 'react';
import useStyles from "../../styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {projetos} from "content.json";
import Button from "@material-ui/core/Button";
import {useParams} from "react-router";
import PdfCard from "./PdfCard";
import {Link} from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {getTransformedImage} from 'utils/images'

function Projeto(props) {
  let { id } = useParams();
  const classes = useStyles();
  const projeto = projetos.find(x => x.numero === parseInt(id));
  const {numero, pdf} = projeto
  const imagens = Array.isArray(projeto.imagens) ? projeto.imagens : [projeto.imagens]
  return (
    <>
      <Container id='projeto' className={classes.cardGrid} maxWidth="md">
        <Grid container alignItems="baseline" direction="row">
          <Grid item xs={2}>
            <Button size="small" color="primary" component={Link} to={`/`}>
              Voltar
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" align="center" color="textPrimary" className={classes.cardGridTitle}>
              Projeto {numero}
            </Typography>
          </Grid>
          <span/>
        </Grid>

        <ImageGallery
          items={imagens.map(url => {
            return {
              original: url,
              thumbnail: getTransformedImage(url, 't_a4_landscape_thumb'),
            }
          })}
          thumbnailPosition={'top'}
          lazyLoad={true}
          infinite={false}
          showPlayButton={false}
          // onClick={e=> window.open(e.target.src, "_blank")}
        />

        {/*<Grid container spacing={4}>*/}
        {/*  {projeto.imagens.map((filename, index) => {*/}
        {/*    return <ImagemCard*/}
        {/*      key={index}*/}
        {/*      filename={filename}*/}
        {/*    />*/}
        {/*  })}*/}
        {/*</Grid>*/}

      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h6" align="center" color="textSecondary" className={classes.cardGridTitle}>
          Veja o projeto completo em PDF
        </Typography>
        <Grid container spacing={4}>
          <PdfCard url={pdf}/>
        </Grid>
      </Container>
    </>
  );
}

export default Projeto;