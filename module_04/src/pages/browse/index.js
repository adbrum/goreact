import React from 'react';

import {
  Container, Title, List, PlayList,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <PlayList to="/playlists/1">
        <img src="https://img.cdandlp.com/2015/05/imgL/117530031.jpg" alt="The Cure" />
        <strong>Rock Pop</strong>
        <p>Relaxe enquanto você progrma ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://img.cdandlp.com/2015/05/imgL/117530031.jpg" alt="The Cure" />
        <strong>Rock Pop</strong>
        <p>Relaxe enquanto você progrma ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://img.cdandlp.com/2015/05/imgL/117530031.jpg" alt="The Cure" />
        <strong>Rock Pop</strong>
        <p>Relaxe enquanto você progrma ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://img.cdandlp.com/2015/05/imgL/117530031.jpg" alt="The Cure" />
        <strong>Rock Pop</strong>
        <p>Relaxe enquanto você progrma ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
