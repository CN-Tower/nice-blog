import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article.component';
import { MyArticleComponent } from './my-article/my-article.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { ArticleService } from './article.service';
import { PublishComponent } from './publish/publish.component';
import { DetailComponent } from './detail/detail.component';

const routers: Routes = [
  { path: '',   component: ArticleComponent,
    children: [
      { path: 'my-article',   component: MyArticleComponent },
      { path: 'my-collection',   component: MyCollectionComponent },
      { path: '', component: MyArticleComponent }
    ]
  },
  { path: 'publish', component: PublishComponent},
  { path: 'detail/:articleId', component: DetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [
    ArticleComponent, MyArticleComponent, MyCollectionComponent,
    PublishComponent, DetailComponent
  ],
  providers: [ ArticleService ]
})
export class ArticleModule { }
