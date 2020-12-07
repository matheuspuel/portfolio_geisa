import {makeStyles} from "@material-ui/core/styles";
import Banner from "assets/banner6.png"

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.light,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbarTitleLink: {
    textDecoration: 'none !important',
    color: theme.palette.text.light,
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
  nome: {
    textTransform: 'uppercase',
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },
  profissao: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },
  servicos: {
    // textTransform: 'uppercase',
  },
  cardGridTitle: {
    paddingBottom: theme.spacing(4),
    textTransform: 'uppercase',
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  ferramentas: {
    paddingBottom: theme.spacing(4),
    fontSize: '20px',
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
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.light,
    paddingBottom: 0,
  },
  developer: {
    fontSize: '12px',
    paddingTop: theme.spacing(4)
  },
}));

export default useStyles;