import {makeStyles} from "@material-ui/core/styles";
import Banner from "assets/banner4.webp"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  dados: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: '#ffffff',
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,.7) 0%,rgba(255,255,255,.7) 100%), url(${Banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    // opacity: '0.5',
    padding: theme.spacing(8, 0, 6),
  },
  cardGridTitle: {
    paddingBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  contato: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default useStyles;