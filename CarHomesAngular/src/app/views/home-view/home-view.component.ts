import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorhomeCardComponent } from '../../components/motorhome-card/motorhome-card.component';
import { TestimonialsComponent } from '../../components/customer-testimonials/customer-testimonials.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

interface Motorhome {
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    CommonModule, 
    MotorhomeCardComponent, 
    TestimonialsComponent,
    AppFooterComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  motorhomes: Motorhome[] = [
    {
      nombre: 'Motorhome 1',
      descripcion: 'Ideal para familias',
      imagen: 'assets/motorhome1.jpg'
    },
    {
      nombre: 'Motorhome 2',
      descripcion: 'Compacta y cómoda',
      imagen: 'assets/motorhome2.jpg'
    },
    {
      nombre: 'Motorhome 3',
      descripcion: '',
      imagen: 'assets/motorhome3.jpg'
    },
    {
      nombre: 'Motorhome 4',
      descripcion: 'Con espacio para todos',
      imagen: 'assets/motorhome4.jpg'
    },
    {
      nombre: 'Motorhome 5',
      descripcion: 'Ideal para grupos',
      imagen: 'assets/motorhome5.jpg'
    },
    {
      nombre: 'Motorhome 6',
      descripcion: 'Compacta y moderna',
      imagen: 'assets/motorhome6.jpg'
    }
  ];
}

export class HomeViewModule { }
