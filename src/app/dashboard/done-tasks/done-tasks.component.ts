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
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.filter(task => task.status === 'done')
    })
  }

  onPending(task: Task) {
    this.taskService.updateTask(task.id!, {...task, status: 'pending'})
  }

  onDelete(task: Task) {
    this.taskService.deleteTask(task.id!)
  }
}
