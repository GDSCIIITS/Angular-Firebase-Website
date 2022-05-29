import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Task } from 'src/app/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: AngularFireList;
  constructor(private firebasedb:AngularFireDatabase) { }

  // Write all the CRUD operations here

  getTasks(): Observable<Task[]> {
    this.taskList = this.firebasedb.list('taskList');
    return this.taskList;
  }

  createTask(task: string) {
    this.taskList.push({
      name: task,
      isChecked: false
    });
  }

  updateTask(key: string, flag: boolean) {
    this.taskList.update(key, { isChecked: flag });
  }
  
  deleteTask(task: string) {
    this.taskList.remove(task);
  }
}
