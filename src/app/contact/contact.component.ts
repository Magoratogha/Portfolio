import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/email.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  subject: string;
  email: string;
  message: string;

  nameIsValid: boolean;
  subjectIsValid: boolean;
  emailIsValid: boolean;
  messageIsValid: boolean;

  constructor(public _MessageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form) {
    this.nameIsValid = this.name ? true : false;
    this.subjectIsValid = this.subject ? true : false;
    this.emailIsValid = this.email ? true : false;
    this.messageIsValid = this.message ? true : false;

    if (this.nameIsValid && this.subjectIsValid && this.emailIsValid && this.messageIsValid) {
      swal('Sending your message...',
      {
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false]
      });
      this._MessageService.sendMessage(form).subscribe(() => {
        swal({
          title: 'Alright!',
          text: 'Your message has been sent.',
          icon: 'success',
          dangerMode: true
        });
      });
    }
  }

}
