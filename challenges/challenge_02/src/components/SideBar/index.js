import React, { Component } from 'react';
import api from '../../services/api';
import MenuRepository from '../MenuRepository/index';

import { Container, Form } from './styles';

class SideBar extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    repository: {},
    issues: [],
    issueState: 'all',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories, issueState = 'all' } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      const { data: issues } = await api.get(
        `/repos/${repository.full_name}/issues?state=${issueState}`,
      );

      this.setState({
        issues,
        repository,
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleClick = async (e, repository, issueState = 'all') => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: issues } = await api.get(
        `/repos/${repository.full_name}/issues?state=${issueState}`,
      );

      this.setState({
        issues,
        repository,
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositoryInput,
      repositoryError,
      repository,
      loading,
      issueState,
      repositories,
      issues,
    } = this.state;
    return (
      <div>
        <Container>
          <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="usuário/repositório"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <i className="fa fa-plus-circle" />
              )}
            </button>
          </Form>
          <div>
            <MenuRepository
              issues={issues}
              repositories={repositories}
              handleClick={this.handleClick}
              loading={loading}
              repository={repository}
              issueState={issueState}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default SideBar;
