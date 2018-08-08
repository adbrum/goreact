import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="search" placeholder="Search" id="" />
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/9062314?v=4" alt="Avatar " />
      Adriano Regis
    </User>
  </Container>
);

export default Header;
