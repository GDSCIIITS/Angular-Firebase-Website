import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../_services/task.service';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks.filter(task => task.status === 'pending'))
  }

  onEdit(task: Task) {
    // Use the task service here
    console.log("I am in edit", task);
  }

  onDone(task: Task) {
    // Use the task service here
    console.log("I am in Done", task);
  }

  onDelete(task: Task) {
    // Use the task service here
    console.log("I am in delete", task);
  }
}
