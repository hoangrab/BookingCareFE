import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  listArticle!: Observable<Article[]>;
  addForm !: FormGroup;
  submited = false;

  urlPreview = '';
  fileanh1 : File | null = null;

  itemout: Article = {
    id: 0,
    image: '',
    title: '',
    content: '',
    date: ''
  };
  constructor(private articleSv: ArticleService, private formbuilder: FormBuilder) { };

  ngOnInit() {
    this.listArticle = this.articleSv.getAllArticles();
    this.listArticle.subscribe();
    this.addForm = this.formbuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      content: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      file: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  loaddata() : void{
    this.listArticle = this.articleSv.getAllArticles();
    this.listArticle.subscribe();
  }

  onsave() {
    this.submited = true;
    if (!this.addForm.invalid) {
      const {title,content,file} = this.addForm.value;
      const formda = new FormData();
      if (this.fileanh1 !== null) {
        formda.append('file', this.fileanh1);
      }
      formda.append('articleDto',JSON.stringify({title,content}))
      this.articleSv.createArticle(formda).subscribe({
        next:(value) => {
          this.loaddata()
          alert('Đã tạo thành công!!!')
        },
        error(value) {
          alert('Có lỗi rồi!!!')
        }
      })
    }
  }

  onupdate() {
    this.submited = true;
    if (!this.addForm.controls['title'].errors && !this.addForm.controls['content'].errors) {
      console.log('ok')
      const {title,content,file} = this.addForm.value;
      const formda = new FormData();
      if (this.fileanh1 !== null ) {
        formda.append('file', this.fileanh1);
      }
      formda.append('articleDto',JSON.stringify({title,content}))
      this.articleSv.updateArticle(formda,this.itemout.id).subscribe({
        next:(value) => {
          this.loaddata();
          alert('Đã cập nhật thành công thành công!!!')
        },
        error(value) {
          alert('Có lỗi rồi!!!')
        }
      })
    }
  }

  sb(event: any) {
    const file: File = event.target.files[0];
    this.fileanh1 = file;
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.urlPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  xem(item: Article) {
    this.itemout = item;
    this.fileanh1 = null;
    this.addForm.patchValue({
      title: item.title,
      content: item.content,
    });
    
  }
  xoa(id: number){
    this.articleSv.delete(id).subscribe({
     next:(value) => {
        this.loaddata()
        alert(value.message)
     }, 
     error(err) {
         alert('Đã có lỗi xảy ra')
     },
    })
  }
}
