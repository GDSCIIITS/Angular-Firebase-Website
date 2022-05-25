import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/_services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {
  @Output() onCreateTask: EventEmitter<Task> = new EventEmitter();
  title!: string;
  description!: string;
  status: string = 'pending';
  showCreateTaskForm!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showCreateTaskForm = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Use the task service here to create a task
    if(!this.title || !this.description) {
      alert("Please fill the necessary details !");
      return;
    }

    const newTask: Task = {
      id: Math.floor(Math.random() * 100),
      title: this.title,
      description: this.description,
      status: this.status,
    }

    this.onCreateTask.emit(newTask)
    this.title = "";
    this.description = "";
  }
}