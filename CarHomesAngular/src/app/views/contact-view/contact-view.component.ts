import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AppFooterComponent],
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
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
