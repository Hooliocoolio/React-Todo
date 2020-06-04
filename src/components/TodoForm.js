import React from 'react';
import add from '../add.svg';


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="enter ur next todo.."
      /><br /><br />
      <button className="addtask" onClick={props.handleAddTodo}><img src={add} alt='logo' /></button> <li className="dot"></li>  
      <button onClick={props.handleClearTasks}>Click to Clear Completed</button>
    </form>
  );
};

export default TodoForm;