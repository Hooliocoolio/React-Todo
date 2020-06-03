// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
//---------------------------------------------------------------
// coming from App.js the app maps through our data then renders
// it to the Todo.js File
//---------------------------------------------------------------
    <div>
      {props.todos.map(todo => (
       <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        /> 
      ))}
    </div>
  );
};

export default TodoList;