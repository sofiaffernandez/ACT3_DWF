import { Routes } from '@angular/router';
import { HomeComponent } from './views/home-view/home-view.component';
import { AboutComponent } from './views/about-view/about-view.component';
import { ContactComponent } from './views/contact-view/contact-view.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
