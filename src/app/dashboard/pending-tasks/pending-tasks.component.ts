import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../_services/task.service';
import { UiService } from '../../_services/ui.service';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css']
})
export class PendingTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private uiService: UiService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.filter(task => task.status === 'pending')
    })
  }

  onEdit(task: Task) {
    this.uiService.toggleCreateTaskForm('edit', task)
  }

  onDone(task: Task) {
    this.taskService.updateTask(task.id!, {...task, status: 'done'})
  }

  onDelete(task: Task) {
    this.taskService.deleteTask(task.id!)
  }
}
