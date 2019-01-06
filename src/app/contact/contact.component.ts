import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/email.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal({
        title: 'Alright!',
        text: 'Your message has been sended',
        icon: 'success',
        dangerMode: true
      });
    });
  }

}
