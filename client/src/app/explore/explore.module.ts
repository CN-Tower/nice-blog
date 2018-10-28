import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ExploreComponent } from './explore.component';

const routers: Routes = [
  { path: '',   component: ExploreComponent },
  { path: '**', component: ExploreComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [ExploreComponent]
})
export class ExploreModule { }
