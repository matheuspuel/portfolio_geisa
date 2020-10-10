import {createMuiTheme} from "@material-ui/core";
// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: "#ff00ff",
    // },
    // secondary: {
    //   main: "#ff00ff",
    // },
      text:{
        // primary: '#ffffff',
        secondary: '#000000',
      },
    background:{
      default: '#c7cfe7',
      paper: '#eff0ff',
    }
  },
});

export default theme;