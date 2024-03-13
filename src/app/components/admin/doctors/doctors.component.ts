import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {

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
  templateUrl: 'doctordetail/contentvip.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class DialogContentExampleDialog {}
