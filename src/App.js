import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

import TodoList from './components/TodoList';


class App extends  Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Enter Your Next Todo',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Clicking on a task will mark it completed',
          id: 1528817077287,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTasks = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
{/* //--------------------------------------------------------------- */}
{/* // begin here */}
{/* //--------------------------------------------------------------- */}
      <h1>Welcome to your Todo List</h1>
{/* //--------------------------------------------------------------- */}
{/* // the next line ports over to the TodoList.js file  */}
{/* //--------------------------------------------------------------- */}
        <TodoList
          className="todolist"
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
{/* //--------------------------------------------------------------- */}
          <TodoForm 
          className="form"
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTasks}
        /> 
      </div>
    );
  }
}

export default App;