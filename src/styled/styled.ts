import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Roboto;
  font-size: 10px;
  max-width: 1800px;
  min-height: 100vh;
  background-color: #fafafa;
  padding: 0;
  margin: 0 auto;
  box-shadow: 0px 0px 5rem 0px rgba(74, 158, 222, 0.2);
`;

interface ContainerProps {
  display?: string;
  alitems?: string;
  juscontent?: string;
  fldir?: string;
}
export const Container = styled.div.attrs<ContainerProps>(
  props => ({
    display: props.display || 'flex',
    alitems: props.alitems || 'center',
    juscontent: props.juscontent || 'space-around',
    fldir: props.fldir || 'row',
  })) <ContainerProps>`
  padding: 0 0.5rem;
  display: ${props => props.display};
  align-items: ${props => props.alitems};
  justify-content: ${props => props.juscontent};
  flex-direction: ${props => props.fldir}
`;

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

export const LinkGroup = styled.nav`
  display: flex;
  justify-content: space-beetwen;
  align-items: center;
`;

interface StyledLinkProps {
  size?: string;
  color?: string;
  linebottom?: string;
  transform?: string;
}
export const StyledLink = styled(NavLink).attrs<StyledLinkProps>(
  props => ({
    size: props.size || '1rem',
    color: props.color || '#000000',
    linebottom: props.linebottom || 'none',
    transform: props.transform || '',
  })) <StyledLinkProps>`
  font-size: ${props => props.size};
  color: ${props => props.color};
  text-decoration: ${props => props.linebottom};
  text-transform: ${props => props.transform};
  margin: 0 10px;
  &:hover {
    color: #848482;
  }
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  height: 2rem;
  font-size: 1rem;
`;

interface LabelProps {
  size?: string;
  margin?: string;
}
export const Label = styled.label.attrs<LabelProps>(
  props => ({
    size: props.size || '1rem',
    margin: props.margin || '0.5rem',
  })) <LabelProps>`
  display: flex;
  align-items: center;
  font-size: ${props => props.size};
  span {
    margin: ${props => props.margin}
  };
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 30vh;
  background-color: #f2f3f4;
  border: 2px solid #3f51b5;
  box-shadow: 24;
  padding: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1rem;
`;

interface TextFieldProps {
  size?: string;
  transform?: string;
  fontw?: string;
}
export const TextField = styled.p.attrs<TextFieldProps>(
  props => ({
    size: props.size || '1rem',
    transform: props.transform || '',
    fontw: props.fontw || 'normal'
  })) <TextFieldProps>`
  font-size: ${props => props.size};
  text-transform: ${props => props.transform};
  font-weight: ${props => props.fontw};
  font-family: Roboto;
  text-align: center;
`;

export const Table = styled.table`
  font-size: 2rem;
  border: 2px solid #3f51b5;
  cols: 5;
  cellpadding: 0.5rem;
  align: center;
  border-collapse: collapse;
  margin: 1rem;
  box-shadow: 0px 0px 3rem 0px rgba(74, 158, 222, 0.2);

  th, td {
    border: 2px solid #3f51b5;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;
