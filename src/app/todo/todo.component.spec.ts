import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatProgressBar
} from '@angular/material';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [
        TodoComponent,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        MatProgressBar,
        CdkPortalOutlet
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 0,
      dueDate: new Date(2018, 7, 1),
      creationDate: new Date(2018, 7, 1),
      description: 'do todo',
      owner: 'me'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
