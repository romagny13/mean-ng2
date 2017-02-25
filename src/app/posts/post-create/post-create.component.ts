import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styles: []
})
export class PostCreateComponent implements OnInit {
  pageTitle = 'Add new post';
  form: FormGroup;
  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'content': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this._postService.addPost(this.form.value).subscribe(() => {
        this._router.navigate(['/posts']);
      });
    }
  }

}
