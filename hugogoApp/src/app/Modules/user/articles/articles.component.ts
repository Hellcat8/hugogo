import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/Models/article';
import { ArticlesService } from '../../../Services/article/articles.service';
import { debug } from 'util';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = [];

  constructor(private articleService: ArticlesService) {
      debugger;
      this.articles = this.articleService.getArticles();
  }

  ngOnInit() {

  }

}
