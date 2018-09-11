import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoComponent } from '../todo/todo.component';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle, MatIcon,
  MatProgressBar
} from '@angular/material';
import { AddNewComponent } from '../add-new/add-new.component';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [
        TodosComponent,
        TodoComponent,
        AddNewComponent,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelHeader,
        MatProgressBar,
        MatIcon,
        CdkPortalOutlet,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
