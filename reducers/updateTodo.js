const updateTodo = (state = { isUpdating : false, todoId : null}, action) =>{
  switch (action.type) {
    case 'UPDATE_TODO_FORM_STATE':
      return {
        isUpdating : action.isUpdating,
        todoId : action.todoId
      }
    default:
      return state;
  }
}

export default updateTodo;
