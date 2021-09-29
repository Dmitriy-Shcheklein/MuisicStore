import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    height: '100%'
  },
  title: {
    width: '100%',
    '& p': {
      fontSize: '1rem',
      width: '100%',
    }
  },
  input: {
    width: '100%',
    margin: '1rem',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    margin: '0 auto',
  },
  wrapper: {
    width: '100%',
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    position: 'relative',
  },
  danger: {
    color: '#dc143c',
  },
  primary: {
    color: '#3f50b5',
  },
  validError: {
    color: '#dc143c',
    position: 'absolute',
    top: '100%',
    left: '1%',
  }
})