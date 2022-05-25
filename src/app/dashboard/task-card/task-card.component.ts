import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDoneTask: EventEmitter<Task> = new EventEmitter();
  @Output() onPendingTask: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }

  onDone(task: Task) {
    this.onDoneTask.emit(task);
  }

  onPending(task: Task) {
    this.onPendingTask.emit(task);
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
