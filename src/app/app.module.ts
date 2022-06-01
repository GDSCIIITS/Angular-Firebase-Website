import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RootComponent } from './dashboard/root/root.component';
import { CustomButtonComponent } from './dashboard/custom-button/custom-button.component';
import { PendingTasksComponent } from './dashboard/pending-tasks/pending-tasks.component';
import { DoneTasksComponent } from './dashboard/done-tasks/done-tasks.component';
import { TaskCardComponent } from './dashboard/task-card/task-card.component';
import { CreateTaskFormComponent } from './dashboard/create-task-form/create-task-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RootComponent,
    CustomButtonComponent,
    PendingTasksComponent,
    DoneTasksComponent,
    TaskCardComponent,
    CreateTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
