import React, { Component } from 'react';
import api from '../../services/api';
import MenuBar from '../../components/MenuBar/index';

import { Container, Form } from './styles';

class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { repositoryInput, repositoryError, loading } = this.state;
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
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK1'}
            </button>
            <select>
              <option value="volvo">
Abertas
              </option>
              <option value="saab">
Fechadas
              </option>
            </select>
          </Form>
        </Container>
        <div>
          <MenuBar repositories={this.state.repositories} />
        </div>
      </div>
    );
  }
}

export default Main;
