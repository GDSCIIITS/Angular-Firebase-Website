import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showCreateTaskForm: boolean = false;
  private formData: Task = {id: '', title: '', description: '', status: 'pending'};
  private subject = new Subject<any>();

  constructor() { }

  toggleCreateTaskForm(type: string, formData: Task): void {
    if(type === 'edit' && this.formData.title === '') {
      this.formData.id = formData.id
      this.formData.title = formData.title;
      this.formData.description = formData.description;
      this.formData.status = formData.status;
    } else {
      this.formData.id = '';
      this.formData.title = '';
      this.formData.description = '';
      this.formData.status = 'pending';
    }
    this.showCreateTaskForm = !this.showCreateTaskForm;
    this.subject.next({formData: this.formData, showCreateTaskForm: this.showCreateTaskForm, type});
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
