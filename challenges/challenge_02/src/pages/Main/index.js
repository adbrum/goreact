import React, { Component } from 'react';
import SideBar from '../../components/SideBar/index';

import { Container } from './styles';

class Main extends Component {
  state = {
    loading: false,
    repository: {},
    issues: [],
    issueState: 'all',
  };

  render() {
    const {
      loading, repository, issues, issueState,
    } = this.state;
    return (
      <div>
        <Container>
          <SideBar
            repository={repository}
            loading={loading}
            issues={issues}
            issueState={issueState}
          />
        </Container>
      </div>
    );
  }
}

export default Main;
