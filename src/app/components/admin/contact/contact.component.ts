import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  lcontact!: Observable<Contact[]>;

  itemout: Contact={
    id: 0,
    date: '',
    name: '',
    note: '',
    gmail: '',
    phone: ''
  };
  constructor(private contactSv: ContactService){};

  ngOnInit() {
    this.lcontact = this.contactSv.getAllContact();
    this.lcontact.subscribe();
  }

  xem(item : Contact) {
    this.itemout = item;
  }
}
