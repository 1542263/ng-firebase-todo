import { Injectable } from '@angular/core';
import { Todo } from './todo/todo.model';
import { Store } from '@ngrx/store';
import { AddTodo } from './actions/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<Todo>) {}

  public loadTodos() {
    // TODO implement as side effect
    this.store.dispatch(new AddTodo(
      {id: 0, owner: 'Me', description: 'Do some stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 10, 24)}
    ));
    this.store.dispatch(new AddTodo(
      {id: 1, owner: 'You', description: 'Do some other stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 8, 10)}
    ));
    this.store.dispatch(new AddTodo(
      {id: 2, owner: 'Her', description: 'Do less stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 8, 3)}
    ));
    this.store.dispatch(new AddTodo(
      {id: 3, owner: 'Him', description: 'Do no stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 9, 12)}
    ));
  }
}
