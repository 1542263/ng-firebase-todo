import { Todo } from '../todo/todo.model';
import { AddTodo, TodoActionTypes } from '../actions/todo.actions';

export interface State {
  readonly todos: Todo[];
}

export const initialState: State = {
  todos: []
};

export function reducer(state = initialState, action: AddTodo): State {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
      return { todos: [...state.todos, action.payload]};
    default:
      return state;
  }
}
