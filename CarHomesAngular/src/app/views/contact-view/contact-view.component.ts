import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.contact);
    alert('Formulario enviado')
  }
}
