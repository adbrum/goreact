import React from 'react';
import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const PlayList = () => (
  <Container>
    <Header>
      <img src="https://img.cdandlp.com/2015/05/imgL/117530031.jpg" alt="The Cure" />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />

        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Cure</td>
          <td>Boys Don't cry</td>
          <td>Boys Don't Cry (álbum)</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Cure</td>
          <td>Boys Don't cry</td>
          <td>Boys Don't Cry (álbum)</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Cure</td>
          <td>Boys Don't cry</td>
          <td>Boys Don't Cry (álbum)</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Cure</td>
          <td>Boys Don't cry</td>
          <td>Boys Don't Cry (álbum)</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>The Cure</td>
          <td>Boys Don't cry</td>
          <td>Boys Don't Cry (álbum)</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default PlayList;
