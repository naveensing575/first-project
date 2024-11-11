import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // Login route without MainLayout
  { path: 'login', component: LoginComponent },

  // Main layout route for all other pages
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, // Default main route
      // Add other child routes here
    ],
  },

  // Wildcard route for any unknown paths
  { path: '**', redirectTo: '' },
];
