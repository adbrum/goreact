import React from 'react';

import { Container, Repository } from './styles';

import Content from '../Content/index';

const MenuBar = ({
  repositories, handleClick, loading, issues, repository, issueState,
}) => (
  <div>
    <Container>
      <Repository>
        {repositories.map(repository => (
          <ul key={repository.id}>
            <li onClick={e => handleClick(e, repository, e.target.value)}>
              <div name={repository.full_name}>
                <img
                  name={repository.full_name}
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
                <strong>
                  {repository.name}
                </strong>
                <small>
                  {repository.owner.login}
                </small>
              </div>
            </li>
          </ul>
        ))}
      </Repository>

      {issues ? (
        <Content
          repository={repository}
          loading={loading}
          issues={issues}
          issueState={issueState}
          handleClick={handleClick}
        />
      ) : (
        ''
      )}
    </Container>
  </div>
);

export default MenuBar;
