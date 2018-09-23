import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTodo from './todo.reducer';

export interface State {
  readonly todoState: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todoState: fromTodo.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTodosState = createFeatureSelector<State, fromTodo.State>('todoState');

export const getTodos = createSelector(
  getTodosState
);
