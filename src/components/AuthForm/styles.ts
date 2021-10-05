import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    height: '100%'
  },
  wrapper: {
    width: '100%',
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    position: 'relative',
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
  button: {
    width: '50%',
    margin: '0 auto',
  },
  validError: {
    color: '#dc143c',
    position: 'absolute',
    top: '100%',
    left: '1%',
  },
  danger: {
    color: '#dc143c',
  },
})

export default useStyles;