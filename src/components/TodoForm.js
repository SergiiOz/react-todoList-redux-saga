import React from 'react';
import PropTypes from 'prop-types';
// bring connect from react-redux, it's the bridge for connecting component to redux
import connect from 'react-redux';

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  CREATE_TODO_REQUESTED,
  SET_TODO_TITLE_REQUESTED,
} from '../redux/actions/todo-action';

const TodoForm = (props) => {
  const onChange = (event) => {
    props.setTodoTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.createTodo(props.title);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What need to be done..."
        onChange={onChange}
        value={props.title}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

TodoForm.propTypes = {
  title: PropTypes.string,
  setTodoTitle: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
};

// Get state to props
const mapStateToProps = (state) => {
  return {
    title: state.todo.title,
  };
};

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => {
  return {
    setTodoTitle: (title) =>
      dispatch({ type: SET_TODO_TITLE_REQUESTED, payload: title }),
    createTodo: (title) =>
      dispatch({ type: CREATE_TODO_REQUESTED, payload: title }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
