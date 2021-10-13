import useTypeSelector from '../../hooks/usetypeSelector';

import LoginModal from '../LoginModal';
import Searchfield from '../SearchField';
import BurgerMenu from '../BurgerMenu';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

import { Container, Header, LinkGroup, StyledLink } from '../../styled/styled';

const Menu = () => {

  const { cartList } = useTypeSelector((state) => state.albums);

  const count = cartList.reduce((accum, item) => accum + item.count, 0)

  return (

    <Header>

      <Container>

        <Container>
          <BurgerMenu />
        </Container>

        <LinkGroup>
          <StyledLink
            size='1.5rem'
            color="#ffffff"
            to='/' >MusicStore</StyledLink>
          <StyledLink
            size='1.5rem'
            color="#ffffff"
            to='/albums' >Albums</StyledLink>
          <StyledLink
            size='1.5rem'
            color="#ffffff"
            to='/profile' >My account</StyledLink>
        </LinkGroup>

      </Container>

      <Container >
        <Searchfield />
      </Container>

      <Container >

        <Container>
          <LoginModal />
        </Container>

        <Container>
          <StyledLink to='/cart'>
            <Badge badgeContent={count} color="secondary">
              <ShoppingCartIcon
                style={{ color: '#ffffff', fontSize: '2rem' }} />
            </Badge>
          </StyledLink>
        </Container>

      </Container>
    </Header>
  );
}

export default Menu;
