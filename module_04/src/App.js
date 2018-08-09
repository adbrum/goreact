import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';

import Sidebar from './components/Sidebar/index';
import Player from './components/Player/index';
import Header from './components/Header/index';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes/index';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
