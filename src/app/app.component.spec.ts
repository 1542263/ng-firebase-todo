import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TodosComponent } from './todos/todos.component';
import {
  MatAccordion, MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatIcon, MatProgressBar,
  MatToolbar
} from '@angular/material';
import { TodoComponent } from './todo/todo.component';
import { AddNewComponent } from './add-new/add-new.component';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { combineReducers, StoreModule } from '@ngrx/store';
import * as fromRoot from './reducers/';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        StoreModule.forRoot({
          books: combineReducers(fromRoot.reducers),
        }),
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        TodosComponent,
        TodoComponent,
        AddNewComponent,
        MatIcon,
        MatToolbar,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        MatProgressBar,
        CdkPortalOutlet
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ng-todo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-todo');
  }));
});
