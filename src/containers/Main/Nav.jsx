import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";
import {Button} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

function Nav(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Eng. Civil Geisa Marques
          </Typography>
          <nav>
            <Button variant="button" color="textPrimary" component={HashLink} to={'/#'} className={classes.link}>
              Início
            </Button>
            <Button variant="button" color="textPrimary" component={HashLink} to={'/#portfolio'} className={classes.link}>
              Portfólio
            </Button>
            <Button variant="button" color="textPrimary" component={HashLink} to={'/#contato'} className={classes.link}>
              Contato
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;