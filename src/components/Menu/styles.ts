import { makeStyles } from "@material-ui/styles";
import styled from 'styled-components'

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

export const Header = styled.header`
  background-color: #3f51b5;
  width: 100%;
  height: 5rem;
  display: flex;
  position: sticky;
  top: 0;
  zIndex: 99;
  justify-content: space-between;
  alignItems: center;
  color: #ffffff;
`;