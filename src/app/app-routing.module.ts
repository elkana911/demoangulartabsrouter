import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Component } from './tab2/tab2.component';
import { Tab1Component } from './tab1/tab1.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component:  Tab1Component},
  { path: 'second', component:  Tab2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
