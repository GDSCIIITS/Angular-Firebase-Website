import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Write all the CRUD operations here

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  createTask() {

  }

  updateTask() {

  }
  
  deleteTask() {

  }
}
