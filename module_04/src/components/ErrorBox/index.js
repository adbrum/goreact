import React from 'react';
import ProptTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import CloseIcon from '../../assets/images/close.svg';
import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError} type="button">
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: ProptTypes.func.isRequired,
  error: ProptTypes.shape({
    visible: ProptTypes.bool,
    message: ProptTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDIspachToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDIspachToProps,
)(ErrorBox);
