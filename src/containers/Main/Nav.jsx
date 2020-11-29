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
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <HashLink
              to={'/'}
              className={classes.toolbarTitleLink}
            >
              Eng. Civil Geisa Marques
            </HashLink>
          </Typography>
          <nav>
            <Button component={HashLink} to={'/'} color='inherit' className={classes.link}>
              Início
            </Button>
            <Button component={HashLink} to={'/#portfolio'} color='inherit' className={classes.link}>
              Portfólio
            </Button>
            <Button component={HashLink} to={'/#contato'} color='inherit' className={classes.link}>
              Contato
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;