import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/_services/ui.service';
import { Subscription } from 'rxjs';
import { TaskService } from '../../_services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  title: string = 'Task management';
  showCreateTaskForm!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private taskService: TaskService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showCreateTaskForm = value.showCreateTaskForm)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleCreateTaskForm('create', {title: '', description: '', status: 'pending'});
  }

  onCreate(task: Task) {
    this.taskService.createTask(task)
    this.showCreateTaskForm = !this.showCreateTaskForm
  }

  onEdit(task: Task) {
    this.taskService.updateTask(task.id!, task)
    this.showCreateTaskForm = !this.showCreateTaskForm
  }
}
