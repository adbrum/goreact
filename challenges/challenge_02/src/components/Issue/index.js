import React from 'react';
import { Container } from './styles';

const Issue = ({ issue }) => (
  <Container>
    <img src={issue.user.avatar_url} alt={issue.user.login} />

    <div className="info">
      <div className="title">
        {issue.title}
      </div>
      <div className="login">
        {issue.user.login}
      </div>
      <div>
        <a href={issue.html_url} className="button">
          <i className="fa fa-external-link" />
          &nbsp; ABRIR ISSUE
        </a>
      </div>
    </div>
  </Container>
);

export default Issue;
