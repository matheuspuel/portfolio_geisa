import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Nav(props) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Informações
        </Typography>
        <Typography variant="h6" color="inherit" noWrap>
          Portfólio
        </Typography>
        <Typography variant="h6" color="inherit" noWrap>
          Contato
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;