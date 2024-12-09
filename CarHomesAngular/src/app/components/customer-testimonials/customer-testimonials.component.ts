import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-testimonials.component.html',
  styleUrls: ['./customer-testimonials.component.css'],
})

export class TestimonialsComponent {
  testimonials = [
    {
      nombre: 'María López',
      ciudad: 'Madrid',
      comentario: 'Una experiencia inolvidable. ¡Totalmente recomendado!',
      foto: 'assets/maria.jpg',
    },
    {
      nombre: 'Carlos García',
      ciudad: 'Barcelona',
      comentario:
        'El motorhome estaba en perfectas condiciones. Excelente servicio.',
      foto: 'assets/carlos.jpg',
    },
    {
      nombre: 'Laura Fernández',
      ciudad: 'Sevilla',
      comentario:
        'Viajamos por toda España cómodamente. Muy satisfechos.',
      foto: 'assets/laura.jpg',
    },
  ];
}
