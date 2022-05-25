import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/_services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  title: string = 'Task management';
  showCreateTaskForm!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showCreateTaskForm = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleCreateTaskForm();
  }

  onCreate(task: Task) {
    console.log(task)
  }
}
