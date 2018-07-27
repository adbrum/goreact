import React from 'react';
import { Container, Repository } from './styles';

const MenuBar = ({ repositories }) => (
  <Container>
    <Repository>
      {repositories.map(repository => (
        <ul key={repository.id}>
          <li name={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>
              {repository.name}
            </strong>
            <small>
              {repository.owner.login}
            </small>
          </li>
        </ul>
      ))}
    </Repository>
  </Container>
);

export default MenuBar;
