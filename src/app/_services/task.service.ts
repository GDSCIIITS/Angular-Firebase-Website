import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksCollection!: AngularFirestoreCollection<Task>;
  tasks!: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.tasks = this.firestore.collection('Tasks').snapshotChanges().pipe(
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
      .collection('Tasks')
      .add(task)
      .then(res => {
      }, err => reject(err));
    });
  }

  updateTask(id: string, todo: {}) {
    return this.firestore.collection('Tasks').doc(id).set(todo, { merge: true });
  }
  
  deleteTask(id: string) {
    return this.firestore.collection('Tasks').doc(id).delete();
  }
}