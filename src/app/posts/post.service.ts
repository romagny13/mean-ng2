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
  _baseUrl: string;
  constructor(private _http: Http) {
    this._baseUrl = 'http://localhost:3000/api/v1/posts';
    this._headers = new Headers({ 'Content-Type': 'application/json' });
  }

  getPosts(): Observable<Post[]> {
    return this._http.get(this._baseUrl)
      .map((response: Response) => <Post[]>response.json())
      .do((data) => console.log(data))
      .catch((error) => this.handleError(error));
  }

  getPost(id: any): any {
    return this._http.get(`${this._baseUrl}/${id}`)
      .map((response: Response) => <Post>response.json())
      .do((data) => console.log(data))
      .catch((error) => this.handleError(error));
  }


  addPost(post: Post): Observable<any> {
    return this._http
      .post(this._baseUrl, JSON.stringify(post), { headers: this._headers })
      .do((data) => console.log(data))
      .map((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  updatePost(id: any, post: Post): Observable<any> {
    return this._http
      .put(`${this._baseUrl}/${id}`, JSON.stringify(post), { headers: this._headers })
      .do((data) => console.log(data))
      .map((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  deletePost(id: any): Observable<any> {
    return this._http
      .delete(`${this._baseUrl}/${id}`)
      .do((data) => console.log(data))
      .map((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(`Error status code ${error.status} at ${error.url}`);
  }

}
