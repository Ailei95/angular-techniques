import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import {UserCardComponent} from './user-card/user-card.component';
import {TodoCardComponent} from './todo-card/todo-card.component';
import {PhotoCardComponent} from './photo-card/photo-card.component';
import {AlbumCardComponent} from './album-card/album-card.component';
import {CommentCardComponent} from './comment-card/comment-card.component';
import {PostCardComponent} from './post-card/post-card.component';

@NgModule({
  declarations: [
    UserCardComponent,
    TodoCardComponent,
    PhotoCardComponent,
    AlbumCardComponent,
    CommentCardComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserCardComponent,
    TodoCardComponent,
    PhotoCardComponent,
    AlbumCardComponent,
    CommentCardComponent,
    PostCardComponent
  ]
})
export class CardModule { }
