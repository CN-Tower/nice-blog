import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ArticleComponent } from './article/article.component';
import { CollectionComponent } from './collection/collection.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { SettingComponent } from './setting/setting.component';

const routers: Routes = [
  { path: '', component: ProfileComponent,
    children: [
      { path: 'user/:userId', component: ArticleComponent },
      { path: 'user/:userId/article', component: ArticleComponent },
      { path: 'user/:userId/collection', component: CollectionComponent },
      { path: 'user/:userId/followers', component: FollowersComponent },
      { path: 'user/:userId/following', component: FollowingComponent },
      { path: 'history', component: CalendarComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'following', component: FollowingComponent },
      { path: 'setting', component: SettingComponent },
      { path: '', component: CalendarComponent }
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
    ProfileComponent, CalendarComponent, ArticleComponent,
    CollectionComponent, FollowersComponent, FollowingComponent, SettingComponent
  ]
})
export class ProfileModule { }
