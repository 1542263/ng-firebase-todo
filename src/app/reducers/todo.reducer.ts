import { Todo } from '../todo/todo.model';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';

export interface State {
  readonly todos: Todo[];
}

export const initialState: State = {
  todos: []
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
      return { todos: [...state.todos, action.payload]};
    case TodoActionTypes.LoadTodos:
      return {...initialState, todos: action.payload };
    default:
      return state;
  }
}
