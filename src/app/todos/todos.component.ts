import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() {
    this.todos.push(
      {id: 0, owner: 'Me', description: 'Do some stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 10, 24)});
    this.todos.push(
      {id: 1, owner: 'You', description: 'Do some other stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 8, 10)});
    this.todos.push(
      {id: 2, owner: 'Her', description: 'Do less stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 8, 3)});
    this.todos.push(
      {id: 3, owner: 'Him', description: 'Do no stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 9, 12)});
  }

  ngOnInit() {
  }

}
