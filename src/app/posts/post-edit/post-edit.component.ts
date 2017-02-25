import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styles: []
})
export class PostEditComponent implements OnInit {
  pageTitle = 'Edit post';
  _id: any;
  post: Post;
  form: FormGroup;
  constructor(private _route: ActivatedRoute, private _router: Router, private _postService: PostService) { }

  ngOnInit(): void {
    this._id = this._route.snapshot.params['id'];
    this._postService.getPost(this._id).subscribe((post) => {
      this.post = post;
      this.form = new FormGroup({
        'title': new FormControl(this.post.title, [Validators.required, Validators.minLength(3)]),
        'content': new FormControl(this.post.content, [Validators.required])
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this._postService.updatePost(this._id, this.form.value).subscribe(() => {
        this._router.navigate(['/posts']);
      });
    }
  }
}