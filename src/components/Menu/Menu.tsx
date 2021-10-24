import React, { useEffect, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import useTypeSelector from '../../hooks/usetypeSelector';

import LoginModal from '../LoginModal';
import Searchfield from '../SearchField';
import BurgerMenu from '../BurgerMenu';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

import { Container, Header, LinkGroup, StyledLink } from '../../styled/styled';


const Menu = () => {

  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation()

  const { cartList } = useTypeSelector((state) => state.albums);

  const count = cartList.reduce((accum, item) => accum + item.count, 0);

  useEffect(() => {
    location.pathname.includes('/albums') ? setShowSearch(true) : setShowSearch(false);
  }, [location])

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
        {showSearch && <Searchfield />}
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

export default withRouter(Menu);
