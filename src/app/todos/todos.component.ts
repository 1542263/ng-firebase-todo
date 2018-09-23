import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { State } from '../reducers';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<State>, private todoService: TodoService) {
    this.todos$ = this.store.pipe(
      select(fromRoot.getTodos),
      map(state => state.todos));

  }

  ngOnInit() {
    // this.store.dispatch(new LoadTodos());
    this.todoService.loadTodos();
  }

}
