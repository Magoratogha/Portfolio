import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { ContactComponent } from '../app/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {state: 'HomePage'} },
  { path: 'about', component: AboutComponent, data: {state: 'AboutPage'} },
  { path: 'skills', component: SkillsComponent, data: {state: 'SkillsPage'} },
  { path: 'contact', component: ContactComponent, data: {state: 'ContactPage'} },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
