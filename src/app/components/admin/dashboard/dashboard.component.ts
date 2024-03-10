import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(private productService : ProductService){};

  ngOnInit() {
    this.productService.getAllProduct()
    .pipe(delay(3000))
    .subscribe({
      next: (value : any) => {
        console.log(value);
        this.products = value.products;
      },
      error: (error) => {
        console.log('hiban' + error);
      }
    });
  }

}
