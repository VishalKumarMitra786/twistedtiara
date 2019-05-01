import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/app/auth/auth.component';
import { SectionsComponent } from 'src/app/sections/sections.component';

const routes: Routes = [
  {
    path: 'home',
    component: SectionsComponent
  },
  {
    path: 'signin',
    component: AuthComponent
  },
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
