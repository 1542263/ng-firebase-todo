import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import * as moment from 'moment';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  daysLeft() {
    return moment(this.todo.dueDate).diff(moment.now(), 'days');
  }

  daysTotal() {
    return moment(this.todo.dueDate).diff(this.todo.creationDate, 'days');
  }

  percentageCompleted() {
    return (1 - this.daysLeft() / this.daysTotal()) * 100;
  }
}
