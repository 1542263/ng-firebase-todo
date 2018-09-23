import { Action } from '@ngrx/store';
import { Todo } from '../todo/todo.model';

export enum TodoActionTypes {
  AddTodo = '[Todo] Add Todo'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public payload: Todo) {}
}

export type TodoActions = AddTodo;
