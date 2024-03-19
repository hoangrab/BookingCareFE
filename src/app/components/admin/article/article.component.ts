import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  larticle!: Observable<Article[]>;

  itemout: Article={
    id: 0,
    image: '',
    title: '',
    content: '',
    date: ''
  };
  constructor(private articleSv: ArticleService){};

  ngOnInit() {
    this.larticle = this.articleSv.getAllArticle();
    this.larticle.subscribe();
  }

  xem(item : Article) {
    this.itemout = item;
  }
}
