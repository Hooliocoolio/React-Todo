import React from 'react';
import check from './check.svg';
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
    
  <div className="completebtn"
    onClick={() => props.handleToggleComplete(props.todo.id) }
  
    >
          {props.todo.completed ? <img width="30px" src={check} alt="check" />   : null}

    </div>
    </div>
)
};

export default Todo;
    