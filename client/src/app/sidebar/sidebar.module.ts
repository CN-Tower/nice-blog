import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { HotComponent } from './hot/hot.component';
import { ArchiveComponent } from './archive/archive.component';
import { TagsComponent } from './tags/tags.component';
import { ActiveComponent } from './active/active.component';
import { SidebarComponent } from './sidebar.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MetaComponent } from './meta/meta.component';

const SIDEBAR_COMPONENTS = [
  UserComponent, HotComponent, ArchiveComponent, TagsComponent,
  ActiveComponent, SidebarComponent, LoginComponent, CategoryComponent,
  AvatarComponent, MetaComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: SIDEBAR_COMPONENTS,
  exports: SIDEBAR_COMPONENTS
})
export class SidebarModule { }
