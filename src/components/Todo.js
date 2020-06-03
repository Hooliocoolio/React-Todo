import React from 'react';
// import UseToggle from '../components/useToggle/UseToggle';
 
const Todo = props => {
  // const [isOn, toggleIsOn] = useToggle();
//   return (
// //---------------------------------------------------------------
// // this renders the list and also holds the handtoggle complete
// // then takes it back to the app.js file
// //---------------------------------------------------------------

//     <div className= "todo"
//       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//       onClick={() => props.handleToggleComplete(props.todo.id)}
//     >  
//           {props.todo.task}
      
//     </div>
//   );
// const [isOn, toggleIsOn] = UseToggle();
return (
  <div className="todo"
    style= {props.todo.completed ? { textDecoration: 'line-through' } : null}>
    {props.todo.task}
  
  
  
  
    <button onClick={() => props.handleToggleComplete(props.todo.id)}>
    
    </button>
    </div>
  
)
};

export default Todo;
    