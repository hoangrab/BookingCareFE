import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Major, majors } from '../models/major';
import { Contact, contacts } from '../models/contact';
import { Article, articles } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getAllArticle() : Observable<Article[]> {
    return of(articles);
  }
}
