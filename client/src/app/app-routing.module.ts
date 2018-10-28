import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'article', loadChildren: './article/article.module#ArticleModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExploreModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
