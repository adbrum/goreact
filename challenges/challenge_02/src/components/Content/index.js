import React from 'react';
import Repository from '../Repository';
import Issue from '../Issue/index';
import {
  Container, Header, Loading, ListIssue,
} from './styles';

const Content = ({
  repository, loading, issues, handleClick, stateSelect,
}) => (
  <Container>
    <Header>
      <div className="state">
        <select value={stateSelect} onChange={e => handleClick(e, repository, e.target.value)}>
          <option value="all">
Todas
          </option>
          <option value="open">
Abertas
          </option>
          <option value="closed">
Fechadas
          </option>
        </select>
      </div>
      {Object.keys(repository).length > 0 ? (
        <div className="repository">
          <Repository repository={repository} />
        </div>
      ) : null}
    </Header>

    {loading ? (
      <Loading>
        <div>
          <i className="fa fa-spinner fa-pulse" />
        </div>
      </Loading>
    ) : (
      <ListIssue>
        {issues.map(issue => <Issue issue={issue} key={issue.id} />)}
      </ListIssue>
    )}
  </Container>
);

export default Content;
