import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      /><br /><br />
      <button onClick={props.handleAddTodo}>Add to your list</button> <li className="dot"></li>  
      <button onClick={props.handleClearTasks}>Click to Clear Completed</button>
    </form>
  );
};

export default TodoForm;