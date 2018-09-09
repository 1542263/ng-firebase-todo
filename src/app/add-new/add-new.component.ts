import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    // this.todos.push({id: 2, owner: 'NEW!', description: 'Do no stuff', creationDate: new Date(2018, 7, 1), dueDate: new Date(2018, 9, 12)});
  }
}
