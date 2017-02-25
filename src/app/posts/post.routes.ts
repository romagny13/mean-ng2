import { Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const POSTS_ROUTES: Routes = [
    { path: '', component: PostListComponent },
    { path: 'new', component: PostCreateComponent },
    { path: ':id', component: PostDetailComponent },
    { path: ':id/edit', component: PostEditComponent },
];
