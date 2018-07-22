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
}