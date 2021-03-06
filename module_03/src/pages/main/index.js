import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      repositoryInput: '',
    };
  }

  handleAddRepository = (e) => {
    e.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    const { favorites } = this.props;
    const { repositoryInput } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
Adicionar
          </button>
          {favorites.loading && (
          <span>
Carregando...
          </span>
          )}
          {!!favorites.error && (
          <span style={{ color: '#F00' }}>
            {favorites.error}
          </span>
          )}
        </form>
        <ul>
          {favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>
                  {favorite.name}
                </strong>
                (
                {favorite.description}
                )
              </p>
              {favorite.url}
              Acessar
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
