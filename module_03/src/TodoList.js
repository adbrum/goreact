import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => removeTodo(todo.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Novo todo')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      removeTodo: PropTypes.func.isRequired,
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToPro = state => ({
  todos: state.todos,
});

const mapDispachToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToPro,
  mapDispachToProps,
)(TodoList);
