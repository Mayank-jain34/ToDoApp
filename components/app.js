import React from 'react';
import FilterList from './FilterList';
import ToDoFormContainer from '../containers/ToDoFormContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

const app = () => (
  <div className="container">
    <h1>ToDo App...</h1>
    <ToDoFormContainer />
    <FilterList />
    <VisibleTodoList />
  </div>
)

export default app;
