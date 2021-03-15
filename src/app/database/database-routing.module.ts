import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { DashboardComponent } from './database-components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DatabaseComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'all-users',
        loadChildren: () => import('./database-components/all-users/all-users.module').then(m => m.AllUsersModule)
      },
      {
        path: 'all-albums',
        loadChildren: () => import('./database-components/all-albums/all-albums.module').then(m => m.AllAlbumsModule)
      },
      {
        path: 'all-posts',
        loadChildren: () => import('./database-components/all-posts/all-posts.module').then(m => m.AllPostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
