import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/Models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpArticleService {

    private articlesUrl = 'api/articles';

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.baseUrl + this.articlesUrl);
  }

}
