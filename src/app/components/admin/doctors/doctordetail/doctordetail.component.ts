import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-doctordetail',
  templateUrl: './doctordetail.component.html',
  styleUrls: ['./doctordetail.component.scss']
})
export class DoctordetailComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      height: '500px',
      width: '600px',

    });

  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'contentvip.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class DialogContentExampleDialog {}
