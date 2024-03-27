import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  addForm !: FormGroup;
  submited = false;

  itemout: Article={
    id: 0,
    image: '',
    title: '',
    content: '',
    date: ''
  };
  constructor(private articleSv: ArticleService, private formbuilder : FormBuilder){};

  ngOnInit() {

    this.addForm = this.formbuilder.group({
      // add attribute zo
    })

    this.larticle = this.articleSv.getAllArticle();
    this.larticle.subscribe();
  }

  get f() {
    return this.addForm.value;
  }

  onsubmit() {
    this.submited = true;
    if(this.addForm.valid) {
      alert('ok nha')
    }
  }

  xem(item : Article) {
    this.itemout = item;
  }
}
