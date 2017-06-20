import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import updateTodo from './updateTodo';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  updateTodo
})

export default todoApp;
