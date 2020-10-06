import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles";
import Link from '@material-ui/core/Link';

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
            <Link variant="button" color="textPrimary" href="#informacoes" className={classes.link}>
              Informações
            </Link>
            <Link variant="button" color="textPrimary" href="#portfolio" className={classes.link}>
              Portfólio
            </Link>
            <Link variant="button" color="textPrimary" href="#contato" className={classes.link}>
              Contato
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;