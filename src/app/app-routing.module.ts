import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path : 'home', component: HomeComponent},
    { path : 'signup', component: SignupComponent},
    { path : 'projects', component: ProjectsComponent},
    { path : 'services', component: ServicesComponent},
    { path : 'contactus', component: ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
