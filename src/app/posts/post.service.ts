import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Post } from './post';

@Injectable()
export class PostService {
  _headers: Headers;
  _basePath: string;
  constructor(private http: Http) {
    this._basePath = 'http://localhost:3000/api/v1/posts';
    this._headers = new Headers({ 'Content-Type': 'application/json' });
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this._basePath)
      .map((response: Response) => <Post[]>response.json())
      .do((data) => console.log(data))
      .catch((error) => this.handleError(error));
  }

  getPost(id: any): any {
    return this.http.get(`${this._basePath}/${id}`)
      .map((response: Response) => <Post>response.json())
      .do((data) => console.log(data))
      .catch((error) => this.handleError(error));
  }


  addPost(post: Post): Observable<any> {
    return this.http
      .post(this._basePath, JSON.stringify(post), { headers: this._headers })
      .map(res => res.json())
      .catch((error) => this.handleError(error));
  }

  updatePost(id: any, post: Post) {
    console.log(id,post);
    return this.http
      .put(`${this._basePath}/${id}`, JSON.stringify(post), { headers: this._headers })
      .map(res => res.json())
      .catch((error) => this.handleError(error));
  }

  deletePost(id: any) {
    return this.http
      .delete(`${this._basePath}/${id}`)
      .map(res => res.json())
      .catch((error) => this.handleError(error));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(`Error status code ${error.status} at ${error.url}`);
  }

}
