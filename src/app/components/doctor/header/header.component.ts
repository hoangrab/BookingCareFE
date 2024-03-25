import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { storageUtils } from 'src/app/utils/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  signout() {
    storageUtils.clear()
    inject(Router).navigate(['login'])
  }
}
