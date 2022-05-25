import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks.filter(task => task.status === 'done'))
  }

  onEdit(task: Task) {
    // Use the task service here
    console.log("I am in edit", task);
  }

  onPending(task: Task) {
    // Use the task service here
    console.log("I am in Pending", task);
  }

  onDelete(task: Task) {
    // Use the task service here
    console.log("I am in delete", task);
  }
}
