import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoListItemComponent implements OnInit {

  @Input() todo;

  @Output() created = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
  }

  onCreateTodo(todo){
    console.log(todo)
    this.created.emit(todo)
  }

  onEditTodo(todo){
    this.todo.editing = !this.todo.editing;
  }

  onCompleteTodo(todo){
    this.completed.emit(todo)
  }

  onEditTodoSubmit(todo){
    this.edited.emit(todo)
  }
}