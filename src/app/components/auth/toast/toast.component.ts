import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  constructor(private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success('Success message', 'Success');
  }

  showError() {
    this.toastr.error('Error message', 'Error');
  }
}
