import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { combineReducers, StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        books: combineReducers(fromRoot.reducers),
      }),
    ],
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
