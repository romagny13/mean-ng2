import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: any;
  errorMessage: string;
  constructor(private _router: Router, private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = <any>error
      );
  }
}
