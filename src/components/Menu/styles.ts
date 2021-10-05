import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'sticky',
    top: '0',
    zIndex: 99,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cart: {
    color: '#ffffff',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 10px',
    '&:hover': {
      color: '#848482'
    }
  },
  box: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default useStyles;