import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ExploreComponent } from './explore.component';
import { FindArticleComponent } from './find-article/find-article.component';
import { FindUserComponent } from './find-user/find-user.component';
import { ExploreService } from './explore.service';

const routers: Routes = [
  { path: '',   component: ExploreComponent,
    children: [
      { path: 'find-article',   component: FindArticleComponent },
      { path: 'find-user',   component: FindUserComponent },
      { path: '', component: FindArticleComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [
    ExploreComponent, FindArticleComponent, FindUserComponent
  ],
  providers: [ ExploreService ]
})
export class ExploreModule { }
