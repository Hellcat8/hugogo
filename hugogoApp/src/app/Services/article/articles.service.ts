import { Injectable } from '@angular/core';
import { Article } from 'src/app/Models/article';
import { HttpArticleService } from 'src/app/Services/http/article.service';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articles: Article[];
  private articlesUrl = 'api/articles';
    baseUrl: string;

    constructor(private httpArticleService: HttpArticleService) {
        this.articles = [];
        debugger;
        this.httpArticleService.getArticles().subscribe(result => {
            for (var i = 0; i < result.length; i++) {
                this.articles.push(result[i]);
            }
        }, error => console.error(error));
    }

    ngOnInit() {

    }

    getArticles(): Article[] {
        return this.articles;
    }

    addArticle(article:Article) {
        this.articles.push(article);
    }

    updateArticle(article: Article) {
        var updateArticle = this.articles.find(art => art.id == article.id)
        updateArticle.title = article.title;
        updateArticle.content = article.content;
        updateArticle.shortDecr = article.shortDecr;
    }
}
