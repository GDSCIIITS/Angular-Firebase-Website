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
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  showCreateTaskForm!: boolean;
  formTitle: string = "New Task Form";

  id!: string;
  title!: string;
  description!: string;
  type!: string;
  status: string = 'pending';

  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.formTitle = value.type === 'edit' ? "Edit form" : "New Task Form";
      this.showCreateTaskForm = value.showCreateTaskForm

      this.id = value.formData.id;
      this.type = value.type;
      this.title = value.formData.title;
      this.description = value.formData.description;
      this.status = value.formData.status;
    })
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
      title: this.title,
      description: this.description,
      status: this.status,
    }

    if(this.type === 'edit') {
      this.onEditTask.emit({...newTask, id: this.id})
    }

    if(this.type == 'create') {
      this.onCreateTask.emit(newTask)
    }

    this.uiService.toggleCreateTaskForm('create', {title: '', description: '', status: 'pending'})
  }
}