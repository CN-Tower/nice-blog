import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article.component';

const routers: Routes = [
  { path: '',   component: ArticleComponent },
  { path: '**', component: ArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
