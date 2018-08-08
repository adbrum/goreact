import React from 'react';
import './styles/global';

import Sidebar from './components/Sidebar/index';
import Player from './components/Player/index';
import Header from './components/Header/index';

import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
