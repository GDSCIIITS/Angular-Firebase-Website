import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showCreateTaskForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleCreateTaskForm(): void {
    this.showCreateTaskForm = !this.showCreateTaskForm;
    this.subject.next(this.showCreateTaskForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
