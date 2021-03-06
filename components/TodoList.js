import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo })=>(
  <ul className="list-group">
    {
      todos.map(todo =>
        <Todo key={todo.id} {...todo }
          toggleTodo = {() => toggleTodo(todo.id)}
          deleteTodo = {() => deleteTodo(todo.id)}
          updateTodo = {() => updateTodo(todo.id)}
        />
      )
    }
  </ul>
)

export default TodoList
