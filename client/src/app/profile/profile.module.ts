import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';

const routers: Routes = [
  { path: '',   component: ProfileComponent },
  { path: '**', component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
