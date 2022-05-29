import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) { }

  // Write all the CRUD operations here

  getTasks() {
    return this.firestore.collection('Task').snapshotChanges();
  }

  createTask(task : {}) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
      .collection('Task')
      .add(task)
      .then(res => {}, err => reject(err));
    });
  }

  updateTask(id: string, todo: {}) {
    return this.firestore.collection('Task').doc(id).set(todo, { merge: true });
  }
  
  deleteTask(id: string) {
    return this.firestore.collection('Task').doc(id).delete();
  }
}