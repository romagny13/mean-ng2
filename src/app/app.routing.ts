import { RouterModule, Routes } from '@angular/router';
import { POSTS_ROUTES } from './posts/post.routes';

const APP_ROUTES: Routes = [
    { path: 'posts', children: POSTS_ROUTES },
    { path: '**', redirectTo: '/posts' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
