import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksCollection!: AngularFirestoreCollection<Task>;
  tasks!: Observable<any[]>;
  uid!: string;

  constructor(private firestore: AngularFirestore) {
    this.uid = JSON.parse(localStorage.getItem('user')!).uid;
    this.tasks = this.firestore.collection('users').doc(this.uid).collection('Tasks').snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((a: any) => {
          const data = a.payload.doc.data() as Task;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  // Write all the CRUD operations here

  getTasks() {
    return this.tasks;
  }

  createTask(task : {}) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('users').doc(this.uid).collection('Tasks')
      .add(task)
      .then(res => {
      }, err => reject(err));
    });
  }

  updateTask(id: string, todo: {}) {
    return this.firestore.collection('users').doc(this.uid).collection('Tasks').doc(id).set(todo, { merge: true });
  }
  
  deleteTask(id: string) {
    return this.firestore.collection('users').doc(this.uid).collection('Tasks').doc(id).delete();
  }
}