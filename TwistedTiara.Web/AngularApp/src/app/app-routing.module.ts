import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from 'src/app/sections/sections.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: SectionsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
