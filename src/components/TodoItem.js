import React from 'react';

import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const onDelete = () => {
    props.deleteTodo(props.todo.id);
  };

  return (
    <React.Fragment>
      <li>
        <p style={{ display: 'inline-block', marginRight: '5px' }}>
          {props.todo.title}
        </p>
        <button onClick={onDelete} style={{ cursor: 'pointer' }}>
          Delete
        </button>
      </li>
    </React.Fragment>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
