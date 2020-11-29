import {createMuiTheme} from "@material-ui/core";
// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a88e00",
    },
    // secondary: {
    //   main: "#ff00ff",
    // },
      text:{
        // primary: '#ffffff',
        secondary: '#000000',
        light: '#c4a600'
      },
    background:{
      // default: '#c7cfe7',
      // paper: '#eff0ff',
      default: '#e7e7e7',
      // paper: '#eff0ff',
      dark: '#000000'
    }
  },
});

export default theme;